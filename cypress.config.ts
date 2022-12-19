import { defineConfig } from "cypress";
//verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //verify download import
      on('task', verifyDownloadTasks)
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com",
    }
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1200
});
