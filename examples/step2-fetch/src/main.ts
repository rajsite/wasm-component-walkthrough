const handle = async (_request: Request): Promise<Response> => {
  const request = await fetch('https://meowfacts.herokuapp.com/');
  const result = await request.json() as { data: string };
  const data = result.data ?? 'woops no response';
  return new Response(`Hello from fetch-event! Did you know ${data}\n`);
};

// API based on Service Worker fetch-event API:
// See: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event
addEventListener('fetch', e => e.respondWith(handle(e.request)));
