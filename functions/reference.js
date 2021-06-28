const { ModuleMocker } = require("jest-mock");

const createUser = () => {
    const user = { name: 'Bob' }
    user.email = 'bob@bot.com'
    return user
}

const copyArr = (arr) => {
    return [...arr]
}

const includesValue = (arr, val) => {
    return arr.includes(val)
}

// const obj1 = { a: 5 }
// const obj2 = { a: 5 }
// false nes rodo i skirtinga vieta atmintyje
// console.log(obj1 === obj2);

module.exports = {
    createUser,
    copyArr,
    includesValue,
};