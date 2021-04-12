const { default: axios } = require('axios')
const models = require('../models')
const apiKey = '&apiKey=2dd298450a7d4bbe98353587eb9c9ef4'
const searchURL = 'https://newsapi.org/v2/everything?q='
const headlinesURL = 'https://newsapi.org/v2/top-headlines?country='


const newsControllers = {}

newsControllers.getHeadlines = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.header.authorization
            }
        })
        const headlinesCode = user.countryId
        const response = await axios.get(`${headlinesURL}${headlinesCode}${apiKey}`)

        res.send(response.articles)
        res.json({ message: 'Top headlines'})

    } catch (error) {
        res.status(400)
        res.json({error})
    }
    
    
    

}

newsControllers.searchNews = async (req, res) => {

}


module.exports = newsControllers