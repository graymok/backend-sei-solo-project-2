const express = require('express')
const newsRoutes = express.Router()
const newsControllers = require('../controllers/newsControllers')

newsRoutes.post('/news', newsControllers.searchNews)
newsRoutes.get('/headlines', newsControllers.getHeadlines)




module.exports = newsRoutes