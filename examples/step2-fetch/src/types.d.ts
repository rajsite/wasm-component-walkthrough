interface WindowEventMap {
  fetch: FetchEvent;
}

interface FetchEvent extends Event {
  readonly request: Request;
  respondWith(r: Response | PromiseLike<Response>): void;
  waitUntil(f: Promise<unknown>): void;
}
