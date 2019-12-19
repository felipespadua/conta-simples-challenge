require('dotenv').config();

const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');
const app = express()

require('./database')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



app.on('error', error => {
  if (error.syscall !== 'listen') { throw error }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

