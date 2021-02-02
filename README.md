# WebPage

![Deploy to Firebase Hosting on merge](https://github.com/MSakamaki/scully-homepage/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg)

[homepage](https://wot.mihirogi.org/)

## development

```sh
npx concurrently "npm start" "port=3333  npm start api" --names 'WEBPAGE,API'
```

### e2e testing

```sh
# headless run
docker-compose -f .docker/e2e/docker-compose.yml up --build
# watch debugging
npx concurrently "npx nx e2e homepage-e2e --watch" "port=3333  npm start api" --names 'E2E,API'
```

## storybook

```sh
npx nx run shared-ui:storybook
```

## scully development

```sh
npm run build && npm run scully && npm run scully:serve
```
