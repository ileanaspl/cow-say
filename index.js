const userInformation = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, I'm ${userInformation.name} and I'm from ${userInformation.campus} !`,
    e : "oO",
    T : "U "
}));