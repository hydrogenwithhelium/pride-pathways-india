// Vercel Edge Function that delegates to the TanStack Start SSR worker
// bundle produced at dist/server/index.js by the Cloudflare Vite plugin.
// Both runtimes use the Web fetch standard, so we can forward Request/Response.

export const config = { runtime: "edge" };

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
