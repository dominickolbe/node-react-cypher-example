import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Cypher from './lib/cypher';

const app = express();
app.use(bodyParser.json());

// serve static files
app.use(express.static(path.join(`${__dirname}/public/`)));

// default index route
app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/public/index.html`)));

// api route to get decrypted text
app.post('/api/cipher', (req, res) => {

  const numericode = req.body.q || '';

  // return empty if body is empty
  if (!numericode) {
    res.send('');
    return;
  }

  // decrypte numericode and return result
  const decrypte = Cypher.decrypte(numericode);
  res.send(decrypte);
});

// 404 route
app.get('*', (req, res) => res.sendStatus(404));

// start server
const connect = async () => {
  await app.listen(8000, () => {
    console.log(`# APP: started. PORT: 8000`);
  });
};

connect();
