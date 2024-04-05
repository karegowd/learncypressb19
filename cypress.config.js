const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
   //   viewportWidth: 1920,
   // viewportHeight: 1080,
   projectId: "x77kp8",
    retries:{openMode:1, runMode: 2},
    //pageLoadTimeout: 120000,
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin:true,
    video: true,  
    //videoCompression: 51,
    videosFolder: "cypress/Raju",
    //specPattern: "cypress/e2e/**/*.raju.js",
    env:{

        "username": "Admin",
        "password": "admin123"
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      // implement node event listeners here
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
