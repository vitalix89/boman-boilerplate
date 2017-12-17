import express from 'express';
import { bomanMiddleware, createSchema } from 'boman';
import db from './models';

const app = express();

app.use((req, res, next) => {
  req.user = { id: 123, isNarco: 0 };
  next();
});

app.use(
  bomanMiddleware({
    db,
    controllersDir: './src/controllers',
    schema: createSchema({
      typesPath: '../../src/graphql/schema',
      resolversPath: '../../src/graphql/schema',
    }),
  }),
);

app.listen(5050, () => console.log('server is running on port 5050'));
