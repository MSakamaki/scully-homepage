# libraries

```sh
npx ng g @nrwl/angular:lib ui --directory=shared --tags=scope:shared,type:ui
npx nx g @nrwl/angular:storybook-configuration shared-ui
```

## components

```sh
npx nx g c components/card --project=shared-ui --export
```
