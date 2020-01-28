import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

app.get('/notes', (request, response) => {
  response.send({ data: 'notebook' });
});

app.get('/', (request, response) => {
  response.send(
    "Travi's node.js backend using typescript is running successfully"
  );
});

export default app;
