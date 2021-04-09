const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

const morgan = require('morgan')


app.use(express.json())
app.use(require('cors')())
app.use(morgan('tiny'))




const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`We're live on ${PORT}`)
  routesReport.print()
})
