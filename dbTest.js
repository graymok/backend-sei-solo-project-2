const models = require('./models')

/* const testing = async () => {
    const createUser1 = await models.user.create({
        name: 'Test1',
        email: 'test1@test.com',
        password: '1234'
    })

    const createUser2 = await models.user.create({
        name: 'Test2',
        email: 'test2@test.com',
        password: '1234'
    })

    const testArticle = await models.article.create({
        title: 'Today in breaking news, a Walrus',
        url: 'url',
        image: 'image url'
    })

    const article = await models.article.findOne({
        id: '1'
    })

    const foundUser1 = await models.user.findOne({
        where: {
            email: 'test1@test.com'
        }
    })

    const foundUser2 = await models.user.findOne({
        where: {
            email: 'test2@test.com'
        }
    })

    const southKorea = await models.country.findOne({
        where: {
            code: 'kr'
        }
    })

    const unitedStates = await models.country.findOne({
        where: {
            code: 'us'
        }
    })

    // testing country having multiple users association
    const koreaUser1 = await foundUser1.setCountry(southKorea)
    const koreaUser2 = await foundUser2.setCountry(southKorea)

    // testing users having multiple articles and articles having multiple users
    const articleUser1 = await foundUser1.addArticle(article)
    const testArticle2 = await article.addUser(foundUser2)
}

testing() */

/* const addGlobal = async () => {
    const global = await models.country.create({
        name: 'Global',
        code: 'zz'
    })
    console.log(global)
}

addGlobal() */