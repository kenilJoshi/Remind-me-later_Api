const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const home = require('./routes/home')
const sendMessage = require("./routes/sendMessage")

app.use("/api/v1", home)
app.use("/api/v1", sendMessage)

module.exports = app