const express = require ('express')

const notes = require('./notes')

const app = express()

app.use('/note',notes)

module.exports = app;