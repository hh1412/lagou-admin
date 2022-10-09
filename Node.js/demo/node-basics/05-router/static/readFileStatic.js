const path = require('path')
const mime = require('mime')
const fs = require('fs')

function myReadFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) {
                resolve('你访问的是一个文件夹,且文件夹里没有index.html')
            }
            else{
                resolve(data)
            }
        })
    })
}

async function readFileStatic(filePathName, res) {
    let ext = path.parse(filePathName).ext

    let mimeType = mime.getType(ext) || 'text/html'

    let data
    if(fs.existsSync(filePathName)){
        if(ext) {
            // myReadFile(filePathName)
            //     .then(result => data = result)
            //     .catch(err => data = err)
            data = await myReadFile(filePathName)
        }
        else {
            // myReadFile(path.join(filePathName, '/index.html'))
            //     .then(result => data = result)
            //     .catch(err => data = err)
            data = await myReadFile(path.join(filePathName, '/index.html'))
        }
    }
    else {
        data = 'page or folder not found.'
    }
    return {
        mimeType,
        data
    }
}

module.exports = readFileStatic