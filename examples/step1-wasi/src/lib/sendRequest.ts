import { handle } from 'wasi:http/outgoing-handler@0.2.3';
import { Fields, OutgoingRequest, OutgoingBody, type Method, type Scheme, type FieldValue } from 'wasi:http/types@0.2.3';

export const sendRequest = (
  headers: [string, string][],
  method: Method,
  scheme: Scheme,
  authority: string,
  pathWithQuery: string,
  body?: string
): {
  body: string | undefined,
  status: number,
  headers: [string, string][]
} => {
  try {
    const encoder = new TextEncoder();
    const fields = Fields.fromList(
      headers.map<[string, FieldValue]>(([k, v]) => [k, encoder.encode(v)])
    );
    const outgoingRequest = new OutgoingRequest(fields);
    outgoingRequest.setScheme(scheme);
    outgoingRequest.setMethod(method);
    outgoingRequest.setPathWithQuery(pathWithQuery);
    outgoingRequest.setAuthority(authority);

    if (body) {
      const outgoingBody = outgoingRequest.body();
      {
        const bodyStream = outgoingBody.write();
        bodyStream.blockingWriteAndFlush(encoder.encode(body));
      }
      OutgoingBody.finish(outgoingBody, undefined);
    }

    const futureIncomingResponse = handle(outgoingRequest, undefined);
    futureIncomingResponse.subscribe().block();
    const result = futureIncomingResponse.get();
    const incomingResponse = result?.tag === 'ok' && result.val.tag === 'ok' ? result.val.val : undefined;
    if (!incomingResponse) {
      throw new Error('Failed to send request');
    }

    const decoder = new TextDecoder();
    const status = incomingResponse.status();
    const responseHeaders = incomingResponse
      .headers()
      .entries()
      .map<[string, string]>(([k, v]) => [k, decoder.decode(v)]);

    let responseBody: string | undefined;
    const incomingBody = incomingResponse.consume();
    {
      const bodyStream = incomingBody.stream();
      bodyStream.subscribe().block();
      const buf = bodyStream.read(500n);
      responseBody = buf.length > 0 ? new TextDecoder().decode(buf) : undefined;
    }

    return {
      body: responseBody,
      status,
      headers: responseHeaders
    };
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }

    throw new Error('Failed to send request');
  }
};
