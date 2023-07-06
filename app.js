const express = require('express')

const homeRouter = require('./router/home.router')
const submitRouter = require('./router/submit.router')

const app = express()

app.use(express.urlencoded());
app.use(express.json())
app.use(homeRouter)
app.use(submitRouter)

module.exports = app;