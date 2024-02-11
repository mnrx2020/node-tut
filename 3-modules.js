//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimun)
const names = require("./4-names")
const sayHi = require("./5-utils")
require("./7-mind-grenade")

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)