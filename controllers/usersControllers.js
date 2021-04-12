const models = require('../models')
const jwt = require('jsonwebtoken')

const usersControllers = {}

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
        res.json({ message: 'User created', user })
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

        if ( user.password === req.body.password ) {
            //const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

            res.json({ message: 'Login successful', user })

        } else {
            res.status(401)
            res.json({ error: 'Login failed' })
        }

    } catch (error) {
        res.status(400)
        res.json({ error: 'Login failed' })
    }
}



module.exports = usersControllers