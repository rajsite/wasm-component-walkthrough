declare module 'wasi:io/streams@0.2.3' {
  interface InputStream extends Disposable {
    [Symbol.dispose](): void;
  }
  interface OutputStream extends Disposable {
    [Symbol.dispose](): void;
  }
}
