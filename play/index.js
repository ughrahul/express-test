const { getFormattedNumber } = require("./library");

const numberToFormat = 1000;
const formattedNumber = getFormattedNumber(numberToFormat);
console.log(formattedNumber);
