if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require('express')
const errorHandlers = require("./middlewares/errorHandler")
const route  = require("./routes")
const app = express()
const port = 3000
require('./config/mongoose')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(route)

app.use(errorHandlers)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})