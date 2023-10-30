const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphql = require('graphql')

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
})

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
const port = 4000;
app.listen(port, () => {
    console.log(`Node.js Express server running... \nVisit http://localhost:${port}/api to query`)
  })