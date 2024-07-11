# Alan Wang's Github Pages Homepage

[![github-pages-deploy](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml/badge.svg)](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml)

👉 [**alankrantas.github.io**](https://alankrantas.github.io/)

Built with [Svelte](https://svelte.dev/docs), [SvelteKit](https://kit.svelte.dev/docs/introduction) and [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/). Has a basic but functional responsive web design. Has options to deploy as a Docker container (using [serve](https://www.npmjs.com/package/serve) as server) and supports DevContainer/Codespace.

Uses Github Action to deploy a production to Github Pages and enables dependabot for security updates. A file containing the current timestamp would be written into a static text file by Github Action so that it can be loaded and shown in the Svelte production.

This is technically an _always-working-in-progress_ project and may be subjected to changes.

---

## Layout and Components

### Main Mode

```mermaid
flowchart TD
  subgraph n0 ["Page (Main Mode)"]
    direction TB
    n1[NameTitle];
    subgraph n2 [Columns];
        subgraph n3 [Column 1];
            direction TB
            n4[ViewItemCard 1];
            n5[ViewItemCard 3];
            n6[...];
            n4-.-n5-.-n6;
        end
        subgraph n7 [Column 2];
            direction TB
            n8[ViewItemCard 2];
            n9[ViewItemCard 4];
            n10[...];
            n8-.-n9-.-n10;
        end
    end
    n11[Footer];
    n1-.-n3;
    n1-.-n7;
    n3-.-n11;
    n7-.-n11;
  end
```

By clicking the button on a view card, the app will switch to view mode that shows the corresponding content.

### View Mode

```mermaid
flowchart TD
  subgraph n0 ["Page (View Mode)"]
    direction TB
    subgraph n1 [Columns]
        direction LR
        subgraph n2 [Column 1]
            direction TB
            n3[NameTitle];
            subgraph n4 [Nav Btns]
                direction TB
                n5[ViewItemNavBtn 1];
                n6[ViewItemNavBtn 2];
                n7[...];
                n5-.-n6-.-n7;
            end
            n3-.-n4;
        end
        subgraph n8 [Column 2]
            direction TB
            n9[ViewItemHead];
            n10[ViewItemContent];
            n9-.-n10;
        end
    end
    n11[Footer];
    n2-.-n11;
    n8-.-n11;
  end
```

The viewer can click the nav bar buttons to switch the view content, or go back to the main mode.

### Under Smaller Resolutions

Both main and view mode will be squashed to a single column when the screen resolution is smaller than `992` px.

Some common components, like `Image` and `Showcase`, has parameters to adjust the component in different resolutions.

---

## Notes for Development and Deployment

> Prerequisites: Node.js, Git and Docker

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

Upgrade all packages:

```bash
yarn upgrade-all
```

After making changes:

```bash
yarn pull  # resolve conflict if any
yarn format
yarn push
```

> Or use `yarn commit` to pull, format then push.

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
| `yarn docker-stop`  | Stop the Docker container.                                     |
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

## Links of Documentations

- [Svelte](https://svelte.dev/docs)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [svelte-simple-modal](https://github.com/flekschas/svelte-simple-modal#api)
