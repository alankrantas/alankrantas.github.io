# Alan Wang's Github Pages Homepage

[![github-pages-deploy](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml/badge.svg)](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml)

Built with [Svelte](https://svelte.dev/docs), [SvelteKit](https://kit.svelte.dev/docs/introduction) and [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/). It has a basic responsive web design. Have options to deploy as Docker container (using Nginx as server) and supports DevContainer/Codespace. Uses Github Action to deploy a production to Github Pages and enables dependabot for security updates.

This is technically a always-working-in-progress project and may be subjected to changes.

👉 [alankrantas.github.io](https://alankrantas.github.io/)

## Development Notes to Self

> Prerequisites: Node.js, Yarn, Git and Docker

### Local Development

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

After making changes:

```bash
yarn pull  # resolve conflict if any
yarn format
yarn commit
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
| `yarn pull`         | Pull commit histories from `main` branch.                      |
| `yarn push`         | Push changes to `main` branch.                                 |
| `yarn commit`       | `yarn pull` + `yarn format` + `yarn commit`                    |
| `yarn docker-build` | Build a Docker container image                                 |
| `yarn docker-run`   | Run the Docker container and open `http://localhost:8080`.     |
| `yarn docker`       | `yarn docker-build` + `yarn docker-run`                        |

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
