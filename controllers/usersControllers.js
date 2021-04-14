const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const usersControllers = {}

usersControllers.findUser = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })
        const country = await user.getCountry()
        res.json({ message: 'User found', user, country })
    } catch (error) {
        res.status(400)
        res.json({ error })
    }
}

usersControllers.signUp = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        const country = await models.country.findOne({
            where: {
                code: req.body.country
            }
        })
        const countryChoice = await user.setCountry(country)
        const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
        console.log(encryptedId)
        res.json({ message: 'User created', userId: encryptedId, user, country })
    } catch (error) {
        res.status(400)
        res.json({ error })
    }
}

usersControllers.signIn = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })
        const country = await user.getCountry()
        const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
        if ( bcrypt.compareSync(req.body.password, user.password) ) {
            res.json({ message: 'Login successful', userId: encryptedId, user, country })
        } else {
            res.status(401)
            res.json({ error: 'Login failed' })
        }
    } catch (error) {
        res.status(400)
        res.json({ error: 'Login failed' })
    }
}

usersControllers.getBookmarks = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })
        const response = await user.getArticles()
        res.json({response})
    } catch (error) {
        res.status(400)
        res.json({ error: 'Bookmarks failed' })
    }
}



module.exports = usersControllers