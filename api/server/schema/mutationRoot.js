import gql from 'graphql';
import { Recipe } from './model/recipe.js';

export const mutationRoot = new gql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        recipe: {
            type: Recipe,
            args: {
                title: { type: gql.GraphQLNonNull(gql.GraphQLString)}
            },
            resolve: (root, args) => {
                try {
                    console.log("do something with args:", args.title)
                    return {
                        title: args.title
                    }
                } catch (err) {
                    var errormsg = "Failed to do the thing" + err
                    throw new Error(errormsg)
                }
            }
        }
    })
})