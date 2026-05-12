export const config = { runtime: "edge" };

// @ts-expect-error — resolved by Vercel after `bun run build` creates dist/server/index.js
import worker from "../dist/server/index.js";

type WorkerContext = {
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
  waitUntil?: (promise: Promise<unknown>) => void;
};

export default async function handler(request: Request, context: WorkerContext): Promise<Response> {
  const context: WorkerContext = {
    waitUntil: context.waitUntil ?? (() => {}),
    passThroughOnException: () => {},
  };

  try {
    return await worker.fetch(request, {}, context);
  } catch (err) {
    console.error("SSR worker error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
