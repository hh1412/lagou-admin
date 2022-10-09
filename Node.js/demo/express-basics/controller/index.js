const template = require('art-template')
const path = require('path')
const fs = require('fs')

const {dataArray} = require('../model/list')

const list = (req, res, next) => {
    // let data = '<ul>'
    // for(var i = 0; i < 100; i++) {
    //     data += `<li>line ${i}</li>`
    // }
    // data += '</ul>'

    // let dataObj = {
    //     ret: true,
    //     data: [],
    // }
    // for(var i = 0; i < 100; i++) {
    //     dataObj.data.push('line' + i)
    // }
    // let dataArray = []

    // for(var i = 0; i < 100; i++) {
    //     dataArray.push('line' + i)
    // }

    // 按步骤做 刷新后304时content-type丢失 视频里则不会丢失 
    // 而且状态代码与视频里不一样 我的为304ok 视频里为304 Not Modified
    // res.header('Content-Type', 'application/json; charset=utf-8')

    // res.render('list', {
    //     data: JSON.stringify(dataArray)
    // })

    // res.render('list-html', {
    //     data: dataArray
    // })

    var html = template(path.join(__dirname, '../view/list-html.art'), {
        data: dataArray
    })

    // cms内容管理系统
    fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

    console.log(html);
    res.send('pages has been compiled.')
}

exports.list = list