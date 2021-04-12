const express = require('express')
const newsRoutes = express.Router()
const newsControllers = require('../controllers/newsControllers')

newsRoutes.get('/headlines', newsControllers.topHeadlines)
newsRoutes.post('/', newsControllers.searchNews)





module.exports = newsRoutes