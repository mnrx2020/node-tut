//our first node app
const amount = 9
if(amount < 10){
    console.log("small number")
}
else{
    console.log("Large number")
}
console.log("hey it's my first node app!!!")

//global variables
//Global - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require     - function to use modules (CommonJS)
// module       - info about current module (file)
// process       - info about env where the program is being executed.

//internal Modules
//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimun)
const john = "john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
sayHi("Susan")
sayHi(john)
sayHi(peter)