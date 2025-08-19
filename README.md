# WASM Component NITech

Various WASM component examples 🎉

## Dependencies

- Node 22 LTS+
- `wkg` from [`wasm-pkg-tools`](https://github.com/bytecodealliance/wasm-pkg-tools?tab=readme-ov-file#installation)
- Wasmtime


## Quick Start

```sh
npm install
```

```sh
npm run build
```

Run a specific example, such as `hono-app` via `wasmtime serve`:

```
npm run start-wasmtime -w examples/hono-app
```

## JavaScript

- `js-app`: Minimal JavaScript example of an HTTP Server using the [`fetch-event`](https://github.com/bytecodealliance/ComponentizeJS?tab=readme-ov-file#using-starlingmonkeys-fetch-event) style APIs.

## TypeScript

The TypeScript examples are configured to use Rollup to make it easier organize apps in multiple files and leverage existing npm packages.

## Resources

- Fermyon Blog: [Routing in Spin Apps with Hono](https://www.fermyon.com/blog/hono-router-with-spin)
- wasmCloud TypeScript Example: [HTTP Server with Hono](https://github.com/wasmCloud/typescript/tree/main/examples/components/http-server-with-hono)
- Bytecode Alliance Repo: [sample-wasi-http-js](https://github.com/bytecodealliance/sample-wasi-http-js)
