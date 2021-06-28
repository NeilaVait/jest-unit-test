const { array } = require("yargs");

const testArr = [
    { hasCar: true, sex: 'male' },
    { hasCar: true, sex: 'male' },
    { hasCar: false, sex: 'male' },
    { hasCar: true },
    { hasCar: true, sex: 'female' },
    { hasCar: true, sex: 'female' },
]

typeof array.isArray(testArr) && testArr.length !== 0 && testArr.forEach(p => {
    console.log(Object.keys(p).includes('sex'));
})
