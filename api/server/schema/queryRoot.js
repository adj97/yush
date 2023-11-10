import gql from 'graphql';

export const queryRoot = new gql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: gql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
});