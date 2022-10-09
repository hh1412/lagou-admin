const http = require('http')

const url = require('url')

const { createProxyMiddleware } = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
    const urlStr = req.url
    if(/\/api/.test(urlStr)) {
        const proxy = createProxyMiddleware('/api', {
            target: 'https://m.moretickets.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
        proxy(req, res)
    }
    else {
        console.log('error');
    }
})

server.listen(8090, () => {
    console.log('localhost:8090');
})