# Alan Wang's Homepage

[![github-pages-deploy](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml/badge.svg)](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml)

> Working in progress...

Built with [Svelte](https://svelte.dev/docs), [SvelteKit](https://kit.svelte.dev/docs/introduction) and [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/). Have options to deploy as Docker container (using Nginx as server). Uses Github Action to deploy a production to Github Pages and dependabot for security updates and supports DevContainer and Github CodeSpace.

👉 [alankrantas.github.io](https://alankrantas.github.io/)

## Development Notes

> Prerequisites: Node.js, Yarn, Git and Docker

### Local Development

> Probably only need to do again when I buy myself a brand new computer...

Install Yarn:

```bash
npm i -g yarn@latest
```

> Windows users would need to grant permission for Yarn in PowerShell (as Administrator) with `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`.

Then

```bash
git clone https://github.com/alankrantas/alankrantas.github.io.git
cd alankrantas.github.io
yarn
```

### List of Scripts

| Command             | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `yarn upgrade-all`  | Upgrade all NPM dependencies.                                  |
| `yarn start`        | Start a local dev server and open `http://localhost:3000`.     |
| `yarn check`        | Sync SvelteKit files. Run after installation and before build. |
| `yarn lint`         | Lint files.                                                    |
| `yarn format`       | Format and prettify files.                                     |
| `yarn build`        | Build a local production at `./build`.                         |
| `yarn serve`        | Serve the local production and open `http://localhost:8080`.   |
| `yarn commit`       | Push all changes to `main` branch.                             |
| `yarn docker-build` | Build a Docker container image                                 |
| `yarn docker-run`   | Run the Docker container and open `http://localhost:8080`.     |

### (Re)create a New Project

> a.k.a. Operation Clean Slate

Create whatever project I want locally, copy and paste the following files

- `.devcontainer/devcontainer.json`
- `.github/workflows/deploy.yml`
- `.github/dependabot.yml`

Then

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/alankrantas/alankrantas.github.io.git
git push -u -f origin main
```
