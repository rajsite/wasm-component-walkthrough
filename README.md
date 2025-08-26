# WASM Component Walthrough

Various WASM component examples 🎉

## Setup

### Fetch repository

Use either codespaces or a local dev environment as follows:

#### Codespaces


  - Navigate to the repo on github
  - Click Code, Switch to the Codespaces tab, and press `+` to create a codespace on main
  - Codespace should load in ~30s
  - Should see a prompt to install recommended extensions, go ahead and do that


#### WSL or Linux locally

- Install [Node 22 LTS+](https://nodejs.org/en/download/)
  - Recommend v22 for Linux using nvm with npm
- Clone the repo locally

### Install WASM tooling

- After fetching the repository, in the terminal run `npm run setup-linux`
- Close the terminal (in codespaces run `exit` in the terminal) and **open a new terminal** so the new cli tools can be found in path
- Verify commands installed with: `wastime --version`

### Benchmarks

To run benchmark scripts you also need the `ab` cli tool.
On WSL or Linux `sudo apt-get update && sudo apt-get install apache2-utils`.

### Build

- In a new terminal window `npm run build` to build all the examples.
