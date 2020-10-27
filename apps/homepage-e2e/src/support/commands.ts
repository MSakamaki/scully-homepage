import {
  addMatchImageSnapshotCommand,
  SnapshotOptions,
} from 'cypress-image-snapshot/command';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {}
//
// -- This is a parent command --
/**
 * https://github.com/jaredpalmer/cypress-image-snapshot#options
 */
addMatchImageSnapshotCommand({
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  customSnapshotsDir: 'src/snapshot',
  dumpDiffToConsole: true,
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Screenshot test the current page.
       * @param name file name of the screenshot
       * @param options general options
       */
      matchImageSnapshot(
        name: string,
        options?: SnapshotOptions
      ): Chainable<Element>;

      /**
       * Screenshot test the current page.
       * @param options general options
       */
      matchImageSnapshot(options?: SnapshotOptions): Chainable<Element>;
    }
  }
}

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
