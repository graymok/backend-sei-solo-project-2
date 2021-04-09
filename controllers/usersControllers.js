const models = require('../models')


const usersControllers = {}

usersControllers.createUser = async (req, res) => {
    try {
        const country = await models.country.findOne({
            where: {
                country: req.body.country
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



module.exports = usersControllers