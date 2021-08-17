const express = require('express');
const app = express();

const mainRouter = require('./routes/operationsRouter')
const usersRouter = require('./routes/usersRouter')


app.listen(3000)

app.use(express.urlencoded({extended:false}))

app.use('/operations', mainRouter)
app.use('/users', usersRouter)
