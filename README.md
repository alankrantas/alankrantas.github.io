# Alan Wang's Personal Site

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://alankrantas-musical-disco-qpvv9p44644cr4w.github.dev/)

> Working in progress...

Built with Svelte, SvelteKit and Bootstrap. Uses Github Action to deploy a production to Github Pages and dependabot for security updates.

Have options to deploy as Docker container (using Nginx as server).

## Development Notes

> Node.js, Git and Docker required

### (Re)create a New Project

> a.k.a. Operation Clean Slate

Create whatever project I want locally, copy and paste `.github\workflows\deploy.yml` and `.github\dependabot.yml`, then

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/alankrantas/alankrantas.github.io.git
git push -u -f origin main
```

### Local Development

> Probably only need to do again when I buy myself a brand new computer...

Install yarn:

```bash
npm i -g yarn@latest
```

Then

```bash
git clone https://github.com/alankrantas/alankrantas.github.io.git
cd alankrantas.github.io
yarn
```

### Commit

```bash
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
| `yarn build`        | Build a local production at `./dist`.                          |
| `yarn serve`        | Serve the local production and open `http://localhost:8080`.   |
| `yarn commit`       | Push all changes to `main` branch.                             |
| `yarn docker-build` | Build a Docker container image                                 |
| `yarn docker-run`   | Run the Docker container and open `http://localhost:8080`.     |
