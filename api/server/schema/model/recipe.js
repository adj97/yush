import gql from 'graphql';

export const Recipe = new gql.GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        title: { type: gql.GraphQLString }
    })
});