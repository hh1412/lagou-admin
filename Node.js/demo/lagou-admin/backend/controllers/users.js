const usersModel = require('../models/users')

const {hash} = require('../utils/tools')

require('../utils/db')

// 注册用户
const signup = async (req, res, next) => {
    res.set('content-type', 'appliction/json; charset=utf-8')
    const { username, password } = req.body
    
    // 判断用户是否存在
    let findResult = await usersModel.findUser(username)

    if(findResult) {
        res.render('fail', {
            data: JSON.stringify({
                message: '用户名存在'
            })
        })
    }
    else {
        const bcryptPassword = await hash(password)
        let result = await usersModel.signup({
            username,
            password: bcryptPassword,
        })
        res.render('succ', {
            data: JSON.stringify({
                message: '注册成功'
            })
        })
    }
}

// 用户列表
const list = async (req, res) => {
    res.set('content-type', 'appliction/json; charset=utf-8')
    
    const listResult = await usersModel.findList()
    res.render('succ', {
        data: JSON.stringify(listResult)
    })
}

// 删除用户
const remove = async (req, res, next) => {
    const { id } = req.body
    usersModel.remove(id)
    res.render('succ', {
        data: JSON.stringify(id)
    })
}

module.exports = {
    signup,
    list,
    remove,
}