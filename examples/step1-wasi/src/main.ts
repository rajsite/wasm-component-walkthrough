import {
  ResponseOutparam,
  OutgoingBody,
  OutgoingResponse,
  Fields,
  type IncomingRequest,
} from 'wasi:http/types@0.2.3';

import { sendRequest } from './send-request';

type IncomingHandler = typeof import('wasi:http/incoming-handler@0.2.3');

export const handle = (_request: IncomingRequest, responseOut: ResponseOutparam): void => {
  const response = sendRequest(
    [],
    { tag: 'get' },
    { tag: 'HTTPS' },
    'meowfacts.herokuapp.com',
    '/',
    undefined
  );

  const data = response.body ? (JSON.parse(response.body) as { data: string }).data : 'woops no response';

  const fields = new Fields();
  const outgoingResponse = new OutgoingResponse(fields);

  const outgoingBody = outgoingResponse.body();
  {
    using outputStream = outgoingBody.write();
    outputStream.blockingWriteAndFlush(
      new Uint8Array(new TextEncoder().encode(`Hello from WASI! Did you know ${data}\n`))
    );
  }

  outgoingResponse.setStatusCode(200);
  OutgoingBody.finish(outgoingBody, undefined);
  ResponseOutparam.set(responseOut, { tag: 'ok', val: outgoingResponse });
};

export const incomingHandler: IncomingHandler = {
  handle
};
