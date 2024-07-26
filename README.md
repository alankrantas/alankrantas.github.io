# Alan Wang's Github Pages Homepage

[![github-pages-deploy](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml/badge.svg)](https://github.com/alankrantas/alankrantas.github.io/actions/workflows/github-pages-deploy.yml)

👉 [**alankrantas.github.io**](https://alankrantas.github.io/)

---

## Overview

The site, technically an _always-working-in-progress_ project started from May 2023, is meant to be built as a single-page application (SPA) with responsive web design (RWD) and is deployed to Github Pages using a Github Action workflow.

---

## Framework and Packages

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [`@sveltejs/adapter-static`](https://github.com/sveltejs/kit/tree/main/packages/adapter-static)
- [`svelte-simple-modal`](https://www.npmjs.com/package/svelte-simple-modal)
- [Bootstrap](https://getbootstrap.com/)

---

## Layout and Components

The index page switches between two layouts - "main" and "view" mode.

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

The index page also accepts a `view` parameter to switch to a specific view directly.

### Responsive Layout

Both main and view mode will be squashed to a single column when the screen width is smaller than `992` px.

Some reusable components, like `Image` and `Showcase`, has parameters to make the component responsive under different resolutions.

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

### List of Actions

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
