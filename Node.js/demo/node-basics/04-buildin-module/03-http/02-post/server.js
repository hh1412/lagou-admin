const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
    city: '上海'
})

const options = {
    protocol: 'http:',
    hostname: 'localhost',
    method: 'post',
    port: 3000,
    path: '/data',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const server = http.createServer((req, res) => {
    const request = http.request(options, (result) => {

    })
    request.write(postData)
    request.end()
    
    res.end()
})

server.listen(8090, () => {
    console.log('localhost:8090');
})