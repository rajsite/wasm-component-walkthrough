import { handle } from './lib/handle';

export const incomingHandler: typeof import('wasi:http/incoming-handler@0.2.3') = {
  handle
};
