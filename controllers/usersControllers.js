const models = require('../models')


const usersControllers = {}

usersControllers.signUp = async (req, res) => {
    try {
        const country = await models.country.findOne({
            where: {
                countryId: req.body.country
            }
        })
        
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        const countryChoice = await user.setCountry(country)
        res.json({ message: 'User created' })
    } catch (error) {
        res.status(400)
        res.json({ error })
        
    }
}

usersControllers.signIn = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email,
            }
        })

        if ( user.password === req.body.password ) {
            //const secureId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
            //res.json({ message: 'Login successful', userId: secureId })

            res.json({ message: 'Login successful', user})

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