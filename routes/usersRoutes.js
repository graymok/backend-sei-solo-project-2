const express = require('express')
const usersRoutes = express.Router()
const usersControllers = require('../controllers/usersControllers')

usersRoutes.post('/', usersControllers.createUser)




module.exports = usersRoutes