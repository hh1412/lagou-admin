const fs = require('fs')

const fsPromises = require('fs/promises')
const { join } = require('path')

// fs.mkdir('logs', (err) => {
//     if(err) throw err
//     console.log('文件夹创建成功');
// })

// fs.rename('./logs', './log', () => {
//     console.log('文件夹名字修改成功');
// })

// fs.rmdir('./log', () => {
//     console.log('文件夹删除成功');
// })

// fs.readdir('./logs', (err, result) => {
//     console.log(result);
// })

// fs.writeFile('./logs/log1.log', 'hello\nworld', (err) => {
//     console.log('done.');
// })

// fs.appendFile('./logs/log1.log', '!!!', err => {
//     console.log('done.');
// })

// fs.unlink('./logs/log1.log', err => {
//     console.log('done.');
// })

// fs.readFile('./logs/log1.log', 'utf-8', (err, content) => {
//     console.log(content);
// })

// fs.readFile('./logs/log1.log', (err, content) => {
//     console.log(content.toString());
// })

// const content = fs.readFileSync('./logs/log1.log')
// console.log(content.toString());
// console.log('continue...');

// ;(async () => {
//     let content = await fsPromises.readFile('./logs/log1.log')
//     console.log(content.toString());
// })()

// for(var i = 0; i < 10; i++) {
//     fs.writeFile(`./logs/log-${i}.log`, `log-${i}`, err => {
//         console.log('done.');
//     })
// }

// function readDir(dir) {
//     fs.readdir(dir, (err, content) => {
//         content.forEach((v, i) => {
//             let joinDir = `${dir}/${v}`
//             fs.stat(joinDir, (err, stats) => {
//                 if(stats.isDirectory()){
//                     readDir(joinDir)
//                 }
//                 else{
//                     fs.readFile(joinDir, 'utf-8', (err, content) => {
//                         console.log(content);
//                     })
//                 }
//             })
//         })
//     })
// }
// readDir('./')

fs.watch('./logs/log-0.log', (err) => {
    console.log('changed');
})