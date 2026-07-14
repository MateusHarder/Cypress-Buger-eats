const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    "env": {
      "grepOmitFiltered": true,
      "grepFilterSpecs": true
    },
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    execTimeout: 10000,
    baseUrl: 'https://buger-eats.vercel.app'
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
