export const Readable = {
  fromWeb<T>(stream: ReadableStream<T>): ReadableStream<T> {
    return stream;
  },
  toWeb<T>(stream: ReadableStream<T>): ReadableStream<T> {
    return stream;
  },
};

export class PassThrough {
  constructor() {
    throw new Error("Node.js PassThrough streams are not available in the Edge runtime.");
  }
}