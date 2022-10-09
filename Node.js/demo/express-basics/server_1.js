const express = require('express')

const app = express()

const middlewares = [
    (req, res, next) => {
        console.log(0);
        next()
    },
    (req, res, next) => {
        console.log(1);
        next()
    },
    (req, res, next) => {
        console.log(2);
        next()
    },
]

// 回调函数又被称为中间件
// 中间件栈

app.use('/', middlewares)

app.use('/api', (req, res, next) => {
    res.send('world')
    next()
})

app.use('/ajax', (req, res) => {
    console.log('ajax');
})

app.listen('8090', () => {
    console.log('localhost:8090');
})