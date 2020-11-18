const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const { PORT = 8080 } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', router);

app.listen(PORT, () => console.log('conectado na porta ' + PORT));
