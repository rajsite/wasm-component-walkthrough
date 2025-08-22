declare module 'wasi:io/streams@0.2.3' {
  interface OutputStream extends Disposable {
    [Symbol.dispose](): void;
  }
}
