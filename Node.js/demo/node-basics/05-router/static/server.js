const http = require('http')

const path = require('path')

const readFileStatic = require('./readFileStatic')

http.createServer(async (req, res) => {
    let urlString = req.url

    let filePathName = path.join(__dirname, './public', urlString)

    let {mimeType, data} = await readFileStatic(filePathName)

    res.writeHead(200, {
        'content-type': `${mimeType}; charset=utf-8`
    })
    res.write(data)
    res.end()
}).listen(8090, () => {
    console.log('localhost:8090');
})