const name = {
    surname: 'zhang',
    sayName() {
        console.log(this.surname);
    }
}

const age = {
    age: 100
}

// module.exports = name

// 正确写法
module.exports = {
    name,
    age,
}

// const exports = module.exports

// 正确写法
// exports.name = name
// exports.age = age

// exports.default = {
//     name,
//     age,
// }

// module.exports = {
//     default
// };

// 要尽量避免循环依赖