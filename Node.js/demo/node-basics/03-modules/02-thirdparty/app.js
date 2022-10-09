const axios = require('axios')

axios.get('https://m.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset')
    .then(result => {
        console.log(result.data);
    })
    .catch(err => {

    })