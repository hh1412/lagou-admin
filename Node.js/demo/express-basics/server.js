const express = require('express')
const router = require('./router/index')
const path = require('path')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// 静态资源服务中间件 内置中间件
app.use(express.static('./public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape: false,
});

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');

app.use('/', router)

app.listen(8090, () => {
    console.log('localhost:8090');
})