const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7oshvc',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    viewportWidth: 1280,
    viewportHeight: 800
  },
});
