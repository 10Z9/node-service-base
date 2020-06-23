# Cloud Auth Service

## Tech stack

- Node JS
- Typescript
- Express JS
- PostgreSQL
- Google Kubernetes Engine
- GitLab CI

## Prerequired

- Node JS
- YARN
- PostgreSQL
- GIT

You can run `install-postgreSQL.sh` and `run-postgreSQL.sh` in `./scripts` folder to create your PostgreSQL database server. It backed by Docker.

## Install

### Clone project

```shell
git clone https://gitlab.com/infinitalk/cloud-auth-service.git
git checkout develop
cd cloud-auth-service
```

### Install dependency packages

```shell
yarn
```

### Export environment variables

Necessary variables is wrote on `.env.sample`. In a simple way, you create `.env` as same as `.env.sample`. Then you run scripts such as `yarn run dev` to export variable to environment and run project.

## Start in development

```shell
yarn run dev
```

## Build & Run

### On local

In production, you could translate source code from `typescript` to `javascript`. It increment performance on runtime.

```shell
yarn run build
```

Then run project by command

```shell
// within export .env
yarn start
```

or

```shell
// without export .env
yarn run start:prod
```

### On Google Kubernetes Engine

1. Build image
2. Deploy in GKE

All in one script

```shell
bash scripts/deploy.sh
```
