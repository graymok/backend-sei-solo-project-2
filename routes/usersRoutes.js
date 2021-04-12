const express = require('express')
const usersRoutes = express.Router()
const usersControllers = require('../controllers/usersControllers')

usersRoutes.post('/', usersControllers.signUp)
usersRoutes.post('/signin', usersControllers.signIn)




module.exports = usersRoutes