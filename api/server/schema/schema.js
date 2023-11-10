import gql from 'graphql';

import { queryRoot } from './queryRoot.js';
import { mutationRoot } from './mutationRoot.js';

export const schema = new gql.GraphQLSchema({
    query: queryRoot,
    mutation: mutationRoot
});