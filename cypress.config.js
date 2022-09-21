const { defineConfig } = require("cypress");
const clientConfig = require('./cypress/support/clientconfig');
const { Client } = require('pg')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        async connectDB(query) {
           const client = new Client(clientConfig)
           await client.connect()
           const res = await client.query(query)
           await client.end()
           return res.rows;
         }
       })
    },
  },
});
