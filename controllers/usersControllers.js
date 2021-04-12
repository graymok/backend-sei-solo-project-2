const models = require('../models')
const jwt = require('jsonwebtoken')

const usersControllers = {}

usersControllers.findUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.headers.authorization
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
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        //const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

        const country = await models.country.findOne({
            where: {
                code: req.body.country
            }
        })

        const countryChoice = await user.setCountry(country)
        res.json({ message: 'User created', user, country })
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

        if ( user.password === req.body.password ) {
            //const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

            res.json({ message: 'Login successful', user, country })

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
    
}

module.exports = usersControllers