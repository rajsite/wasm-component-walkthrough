# WASM Component Walthrough

Various WASM component examples 🎉

## Setup

### Codespaces

- Open the repo in codespaces
  - Navigate to the repo on github
  - Click Code, Switch to the Codespaces tab, and press `+` to create a codespace on main
  - Codespace should load in ~30s
  - Should see a prompt to install recommended extensions, go ahead and do that
- In the terminal run `npm run setup-linux`
- Close the terminal and open a new session so cli tools can be found in path
- Verify commands installed with: `wastime --version`

#### WSL or Linux locally

- Install [Node 22 LTS+](https://nodejs.org/en/download/)
  - Recommend v22 for Linux using nvm with npm
- Clone the repo locally
- In the terminal run `npm run setup-linux`
- Close the terminal and open a new session so cli tools can be found in path
- Verify commands installed with: `wastime --version`

## Next steps

Visit the

## Resources

- Fermyon Blog: [Routing in Spin Apps with Hono](https://www.fermyon.com/blog/hono-router-with-spin)
- wasmCloud TypeScript Example: [HTTP Server with Hono](https://github.com/wasmCloud/typescript/tree/main/examples/components/http-server-with-hono)
- Bytecode Alliance Repo: [sample-wasi-http-js](https://github.com/bytecodealliance/sample-wasi-http-js)
