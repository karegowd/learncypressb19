const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries:{openMode:4},

    //specPattern: "cypress/e2e/**/*.raju.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
