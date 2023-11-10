import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema.js';

const app = express();

import cors from 'cors';
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! The API is at <a href="/api">/api</a>')
});

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

const port = 4000;
app.listen(port, () => {
    console.log(`Node.js Express server running... \nVisit http://localhost:${port}/api to query`)
});