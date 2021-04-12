const axios = require('axios')
const models = require('../models')
const apiKey = '&apiKey=2dd298450a7d4bbe98353587eb9c9ef4'
const searchURL = 'https://newsapi.org/v2/everything?q='
const headlinesURL = 'https://newsapi.org/v2/top-headlines?country='


const newsControllers = {}

newsControllers.topHeadlines = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.headers.authorization
            }
        })
        console.log(user)
        const country = await user.getCountry()
        console.log(country)
        const code = country.code
        console.log(code)

        const response = await axios.get(`${headlinesURL}${code}${apiKey}`)

        res.send(response.data)
        

    } catch (error) {
        res.status(404)
        res.json({error})
    }
}

newsControllers.searchNews = async (req, res) => {

}


module.exports = newsControllers