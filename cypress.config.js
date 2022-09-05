const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rx2zjo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  "baseUrl": "http://alura-fotos.herokuapp.com",
  },
    "reporter": "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"
    }
});
