const express = require('express')
const usersRoutes = express.Router()
const usersControllers = require('../controllers/usersControllers')

usersControllers.post('/users', usersControllers.createUser)




module.exports = usersRoutes