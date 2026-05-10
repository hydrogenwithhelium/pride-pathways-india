// Vercel Edge Function wrapper around the TanStack Start worker bundle
// produced by `@cloudflare/vite-plugin`. Both runtimes use the Web `fetch`
// standard, so we just forward the Request and return the Response.
//
// IMPORTANT: this assumes the Cloudflare build emits the worker entry to
// `dist/server/index.js`. If your build output path differs, update the
// import below to match (e.g. `../dist/_worker.js/index.js`).

export const config = { runtime: "edge" };

// @ts-expect-error — built file resolved at deploy time
import worker from "../dist/server/index.js";

export default async function handler(request: Request): Promise<Response> {
  try {
    return await worker.fetch(request, {}, {});
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
