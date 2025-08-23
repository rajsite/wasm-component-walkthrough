declare module 'wasi:http/types@0.2.3' {
  interface Fields extends Disposable {
    [Symbol.dispose](): void;
  }
  interface IncomingRequest extends Disposable {
    [Symbol.dispose](): void;
  }
  interface OutgoingRequest extends Disposable {
    [Symbol.dispose](): void;
  }
  interface RequestOptions extends Disposable {
    [Symbol.dispose](): void;
  }
  interface ResponseOutparam extends Disposable {
    [Symbol.dispose](): void;
  }
  interface IncomingResponse extends Disposable {
    [Symbol.dispose](): void;
  }
  interface IncomingBody extends Disposable {
    [Symbol.dispose](): void;
  }
  interface FutureTrailers extends Disposable {
    [Symbol.dispose](): void;
  }
  interface OutgoingResponse extends Disposable {
    [Symbol.dispose](): void;
  }
  interface OutgoingBody extends Disposable {
    [Symbol.dispose](): void;
  }
  interface FutureIncomingResponse extends Disposable {
    [Symbol.dispose](): void;
  }
}

declare module 'wasi:io/poll@0.2.3' {
  interface Pollable extends Disposable {
    [Symbol.dispose](): void;
  }
}

declare module 'wasi:io/streams@0.2.3' {
  interface InputStream extends Disposable {
    [Symbol.dispose](): void;
  }
  interface OutputStream extends Disposable {
    [Symbol.dispose](): void;
  }
}
