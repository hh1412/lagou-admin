const fs = require('fs')

const mime = require('mime')

require('http')
    // .createServer((req, res) => {
    //     const urlString = req.url
    //     switch(urlString) {
    //         case '/': 
    //             res.end('hello')
    //             break
    //         case '/home':
    //             fs.readFile('./home.html', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         case '/app.js':
    //             fs.readFile('./app.js', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         case '/abc.png':
    //             console.log(222222);
    //             fs.readFile('./abc.png', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         default:
    //             res.end('page 404.')
    //             break
    //     }
    // })
    .createServer((req, res) => {
        const urlString = req.url
        const type = mime.getType(urlString.split('.')[1])
        let file = fs.readFileSync(`.${urlString}`)
        res.writeHead(200, {
            'content-type': type
        })
     
        res.end(file)
    })
    .listen(8090, () => {
        console.log('localhost:8090');
    })