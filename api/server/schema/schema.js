const gql = require('graphql');

const QueryRoot = new gql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: gql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
})

module.exports = new gql.GraphQLSchema({
    query: QueryRoot
});