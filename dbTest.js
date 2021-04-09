const models = require('./models')



const testing = async () => {
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

    const koreaUser1 = await foundUser1.addCountry(southKorea)
    const koreaUser2 = await foundUser2.addCountry(southKorea)
}

testing()