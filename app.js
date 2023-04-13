const express = require('express');
const connectToDatabase = require('./database/database');
const app = express();
const port = 5000;

const rotasUsuario = require('./router/usuario.router');

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', rotasUsuario);

app.get('/', (req, res) => {
  res.send('endpoint. Hello World!');
});

app.listen(port, () => {
  console.log(`Acessar em http://localhost:${port}`);
});