# Alan Wang's Personal Site

> Working in progress...

Built with Svelte, SvelteKit and Bootstrap. Uses Github Action to deploy a production to Github Pages and dependabot for security updates.

## Local Development

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

### Pull Repo to Local

> Probably only need to do again when I buy myself a brand new computer...

Install yarn and serve:

```bash
npm i -g yarn@latest serve@latest
```

Then

```bash
git clone https://github.com/alankrantas/alankrantas.github.io.git
cd alankrantas.github.io
```

Now enjoy the scripts myself:

| Command                 | Description                                                    |
| ----------------------- | -------------------------------------------------------------- |
| `yarn`                  | Install local dependencies and remove unnecessary packages.    |
| `yarn yarn-upgrade-all` | Upgrade all dependencies.                                      |
| `yarn start`            | Start a local dev server and open `http://localhost:3000`.     |
| `yarn check`            | Sync ScelteKit files. Run after installation and before build. |
| `yarn format`           | Format and prettify files.                                     |
| `yarn build`            | Build a local production at `./dist`.                          |
| `yarn serve`            | Serve the local production and open `http://localhost:8080`.   |
| `yarn pull`             | Pull changes from `main` branch.                               |
| `yarn commit`           | Push changes to `main` branch.                                 |
| `yarn docker-build`     | Build a Docker image                                           |
| `yarn docker-run`       | Run the Docker image                                           |
