const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('client'));

/**
 * TODO
 * [x] Serve static files (ask Aalok/Elvin where those live)
 * [x] Handle 404s
 * [x] Handle Errors
 *
 */

app.use((_req, res) => res.sendStatus(404));

app.use((err, _req, res) => {
  const defaultErr = {
    log: 'Caught Unknown middleware error.',
    status: 500,
    message: { err: 'An unknown error occured.' },
  };
  const { log, status, message } = Object.assign(defaultErr, err);
  console.log(log);
  return res.status(status).send(message);
});

console.log('listening on 3000...');
app.listen(3000);
