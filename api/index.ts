export const config = { runtime: "edge" };

// @ts-expect-error — resolved by Vercel after `bun run build` creates dist/server/index.js
import worker from "../dist/server/index.js";

type WorkerContext = {
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
};

type VercelEdgeContext = {
  waitUntil?: (promise: Promise<unknown>) => void;
};

export default async function handler(
  request: Request,
  vercelContext: VercelEdgeContext,
): Promise<Response> {
  const workerContext: WorkerContext = {
    waitUntil: vercelContext.waitUntil ?? (() => {}),
    passThroughOnException: () => {},
  };

  try {
    return await worker.fetch(request, {}, workerContext);
  } catch (err) {
    console.error("SSR worker error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
