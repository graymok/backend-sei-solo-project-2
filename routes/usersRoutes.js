const express = require('express')
const usersRoutes = express.Router()
const usersControllers = require('../controllers/usersControllers')

usersRoutes.get('/', usersControllers.findUser)
usersRoutes.post('/signup', usersControllers.signUp)
usersRoutes.post('/signin', usersControllers.signIn)




module.exports = usersRoutes