const { Users } = require('../utils/db')

const findUser = (username) => {
    return Users.findOne({username})
}

const signup = ({username, password}) => {
    const users = new Users({
        username,
        password
    })
    return users.save()
}

const findList = () => {
    return Users.find().sort({_id: -1})
}

const remove = id => {
    return Users.deleteOne({id})
}

module.exports = {
    signup,
    findUser,
    findList,
    remove,
}