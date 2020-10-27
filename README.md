# WebPage

[homepage](https://scully-homepage-5df8c.web.app/)

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

## scully development

```sh
npm run build && npm run scully && npm run scully:serve
```
