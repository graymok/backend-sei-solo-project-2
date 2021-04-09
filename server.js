const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

const morgan = require('morgan')

const usersRoutes = require('./routes/usersRoutes')
const newsRoutes = require('./routes/newsRoutes')

app.use(express.json())
app.use(require('cors')())
app.use(morgan('tiny'))

app.use('/news', newsRoutes)
app.use('/users', usersRoutes)


const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`We're live on ${PORT}`)
  routesReport.print()
})
