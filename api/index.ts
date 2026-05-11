// Vercel Node Function that delegates to the TanStack Start SSR worker
// bundle produced at dist/server/index.js. Node runtime is required because
// the bundle imports node:stream / node:stream/web, which Vercel's Edge
// runtime does not support.

export const config = { runtime: "nodejs" };

// @ts-expect-error — resolved at deploy time from the build output
import worker from "../dist/server/index.js";

export default async function handler(request: Request): Promise<Response> {
  try {
    return await worker.fetch(request, {}, {
      waitUntil: () => {},
      passThroughOnException: () => {},
    });
  } catch (err) {
    console.error("SSR worker error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
