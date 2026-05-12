const webStreams = globalThis as Record<string, unknown>;

export const ReadableStream = webStreams.ReadableStream;
export const WritableStream = webStreams.WritableStream;
export const TransformStream = webStreams.TransformStream;
export const ByteLengthQueuingStrategy = webStreams.ByteLengthQueuingStrategy;
export const CountQueuingStrategy = webStreams.CountQueuingStrategy;
export const ReadableByteStreamController = webStreams.ReadableByteStreamController;
export const ReadableStreamBYOBReader = webStreams.ReadableStreamBYOBReader;
export const ReadableStreamBYOBRequest = webStreams.ReadableStreamBYOBRequest;
export const ReadableStreamDefaultController = webStreams.ReadableStreamDefaultController;
export const ReadableStreamDefaultReader = webStreams.ReadableStreamDefaultReader;
export const TextDecoderStream = webStreams.TextDecoderStream;
export const TextEncoderStream = webStreams.TextEncoderStream;
export const TransformStreamDefaultController = webStreams.TransformStreamDefaultController;
export const WritableStreamDefaultController = webStreams.WritableStreamDefaultController;
export const WritableStreamDefaultWriter = webStreams.WritableStreamDefaultWriter;