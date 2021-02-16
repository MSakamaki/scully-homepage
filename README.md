# WebPage

![released](https://github.com/MSakamaki/scully-homepage/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg)

[![](https://img.shields.io/badge/AccessTo-BLOG-blue)](https://wot.mihirogi.org/)

[![](https://img.shields.io/badge/AccessTo-LightHouseServer-blue)](https://still-island-43535.herokuapp.com/app/projects/scully-homepage/dashboard)

[![](https://img.shields.io/badge/AccessTo-SearchConsole-blue)](https://search.google.com/search-console?resource_id=sc-domain%3Awot.mihirogi.org&hl=ja)

[![](https://img.shields.io/badge/AccessTo-GoogleAnalytics-blue)](https://analytics.google.com/analytics/web/?authuser=0#/p249130219/reports/defaulthome?params=_u..nav%3Ddefault)

[![](https://img.shields.io/badge/AccessTo-Firebase-FFCA28)](https://console.firebase.google.com/u/0/project/scully-homepage-5df8c/overview)

[![](https://img.shields.io/badge/AccessTo-GitHub-4078c0)](https://github.com/MSakamaki/scully-homepage)

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
