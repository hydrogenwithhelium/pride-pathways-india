import type { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "node:http";

// @ts-expect-error — resolved by Vercel after `bun run build` creates dist/server/index.js
import worker from "../dist/server/index.js";

type WorkerContext = {
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
};

function headerValue(headers: IncomingHttpHeaders, name: string): string | undefined {
  const value = headers[name];
  return Array.isArray(value) ? value[0] : value;
}

function toWebRequest(request: IncomingMessage): Request {
  const protocol = headerValue(request.headers, "x-forwarded-proto") ?? "https";
  const host =
    headerValue(request.headers, "x-forwarded-host") ??
    headerValue(request.headers, "host") ??
    "localhost";
  const url = new URL(request.url ?? "/", `${protocol}://${host}`);
  const headers = new Headers();

  for (const [key, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init: RequestInit & { duplex?: "half" } = {
    method: request.method ?? "GET",
    headers,
  };

  if (init.method !== "GET" && init.method !== "HEAD") {
    init.body = request as unknown as BodyInit;
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendWebResponse(response: Response, reply: ServerResponse): Promise<void> {
  reply.statusCode = response.status;

  const getSetCookie = (response.headers as Headers & { getSetCookie?: () => string[] })
    .getSetCookie;
  const setCookies = getSetCookie?.call(response.headers);

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "set-cookie") {
      reply.setHeader(key, value);
    }
  });

  if (setCookies?.length) {
    reply.setHeader("set-cookie", setCookies);
  }

  reply.end(Buffer.from(await response.arrayBuffer()));
}

export default async function handler(
  request: IncomingMessage,
  reply: ServerResponse,
): Promise<void> {
  const context: WorkerContext = {
    waitUntil: () => {},
    passThroughOnException: () => {},
  };

  try {
    const response = await worker.fetch(toWebRequest(request), process.env, context);
    await sendWebResponse(response, reply);
  } catch (err) {
    console.error("SSR worker error:", err);
    reply.statusCode = 500;
    reply.end("Internal Server Error");
  }
}
