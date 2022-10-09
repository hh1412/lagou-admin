const logger = require('../../utils/log')

const http = require('http')
const https = require('https')

const querystring = require('querystring')

const server = http.createServer((request, response) => {
    const url = request.url

    // let data = ''
    // request.on('data', chunk => {
    //     data += chunk
    // })
    // request.on('end', () => {
    //     response.writeHead(200, {
    //         'content-type': 'application/json;charset=utf-8'
    //     })
    //     logger.debug(data)
    //     response.write(JSON.stringify(querystring.parse(data)))
    //     response.end()
    // })
    https.get('https://i.maoyan.com/ajax/moreComingList?token=&movieIds=1397016,1394637,1301026,1306855,1048274,1416685,1367251,1369917,1383307,1446115&optimus_uuid=6D75C5302F4F11ED895F5B25C88EDC2ADE8147D3850A421CA4333A9CBAD792F0&optimus_risk_level=71&optimus_code=10', result => {
        let data = ''
        result.on('data', chunk => {
            data += chunk
        })
        result.on('end', () => {
            response.writeHead(200, {
                'content-type': 'application/json;charset=utf-8'
            })
            response.write(data)
            response.end()
        })
    })


})

server.listen(8090, () => {
    console.log('localhost:8090');
})