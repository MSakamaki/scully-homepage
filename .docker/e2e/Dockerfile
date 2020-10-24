# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/browsers:node14.7.0-chrome84
# set working directory
RUN mkdir /usr/webpage
WORKDIR /usr/webpage
COPY package.json package-lock.json ./
COPY angular.json nx.json decorate-angular-cli.js ./
COPY jest.config.js tsconfig.base.json jest.preset.js tslint.json ./
COPY scully.homepage.config.ts ./
# install node modules
RUN npm ci
