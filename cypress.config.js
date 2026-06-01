const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7oer7j",
  allowCypressEnv: false,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    video: false,
  },
});
