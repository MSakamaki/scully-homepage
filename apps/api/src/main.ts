/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as express from 'express';
import * as functions from 'firebase-functions';

import { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const server: Express = express();

/**
 * @command
 * PORT=3333 npm start api
 *  => http://localhost:3333/api/hello
 * npm run build api && npx firebase serve --only functions
 *  => http://localhost:5000/scully-homepage-5df8c/us-central1/api
 * npm run build && npx firebase deploy --only functions:api
 *  => https://us-central1-scully-homepage-5df8c.cloudfunctions.net/api/api/hello
 */
export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  app.enableCors();
  app.setGlobalPrefix('api');
  if (process.env.port) {
    app.listen(process.env.port);
  }
  console.log('the server is starting @ firebase');
  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
