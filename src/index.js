const express = require('express');
const app = express();

const mainRouter = require('./routes/main')

app.listen(3000)

app.use('/', mainRouter)