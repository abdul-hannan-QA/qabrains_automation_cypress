const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://practice.qabrains.com/',
  viewportWidth: 1366,
  viewportHeight: 768,
  setupNodeEvents(on, config) {
    return config;
  },
    specPattern:'cypress/integration/examples/Pages/*.js'
  },
});
