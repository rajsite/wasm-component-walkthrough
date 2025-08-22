import { handle } from './lib/handle';

addEventListener('fetch', e => e.respondWith(handle(e.request)));
