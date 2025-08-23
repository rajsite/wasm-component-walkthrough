import {
  ResponseOutparam,
  OutgoingBody,
  OutgoingResponse,
  Fields,
  type IncomingRequest,
} from 'wasi:http/types@0.2.3';
import { sendRequest } from './sendRequest';

export const handle = (_request: IncomingRequest, responseOut: ResponseOutparam): void => {
  const response = sendRequest(
    [],
    { tag: 'get' },
    { tag: 'HTTPS' },
    'www.google.com',
    '/',
    undefined
  );
  console.log('Response from google.com:', response.body);
  const fields = new Fields();
  const outgoingResponse = new OutgoingResponse(fields);

  const outgoingBody = outgoingResponse.body();
  {
    using outputStream = outgoingBody.write();
    outputStream.blockingWriteAndFlush(
      new Uint8Array(new TextEncoder().encode('Hello from Bundled TypeScript!\n'))
    );
  }

  outgoingResponse.setStatusCode(200);
  OutgoingBody.finish(outgoingBody, undefined);
  ResponseOutparam.set(responseOut, { tag: 'ok', val: outgoingResponse });
};
