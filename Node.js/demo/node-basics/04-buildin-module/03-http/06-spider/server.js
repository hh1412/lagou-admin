const http = require('http')
const https = require('https')
const cheerio = require('cheerio');

function filterData(data){
    const $ = cheerio.load(data);
    let goods = $('.section-item-box .goods-name').each((i, el) => {
        console.log($(el).text());
    })
}

const server = http.createServer((req, res) => {
    let data = ''
    https.get('https://www.meizu.com', result => {
        result.on('data', chunk => data += chunk)
        result.on('end', () => {
            filterData(data)
        })
    })
})

server.listen(8090, () => {
    console.log('localhost:8090');
})