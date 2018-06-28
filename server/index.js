const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

//brought in from schema js
const {schema, root} = require('./graphql/schema');

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

//this is how we get access to our schema
// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: root,
//   graphiql: true
// }))

//set up for apollo client
app.post('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: false
}));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
