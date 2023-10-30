const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const port = 4000;
app.listen(port, () => {
    console.log(`Node.js Express server running... \nVisit http://localhost:${port}/api to query`)
  })