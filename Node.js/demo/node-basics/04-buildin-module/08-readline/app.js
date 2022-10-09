const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('你好吗?\n', answer => {

    console.log('回答: ' + answer);

    rl.close()
})