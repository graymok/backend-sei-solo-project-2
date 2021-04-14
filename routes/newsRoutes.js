const express = require('express')
const newsRoutes = express.Router()
const newsControllers = require('../controllers/newsControllers')

newsRoutes.get('/headlines', newsControllers.topHeadlines)
newsRoutes.post('/', newsControllers.searchNews)
newsRoutes.post('/bookmarks', newsControllers.saveArticle)
newsRoutes.post('/bookmarks/remove', newsControllers.removeArticle)


module.exports = newsRoutes