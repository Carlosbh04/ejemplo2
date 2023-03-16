
let person = require('./person')

let persona1 = new person('carlos',175,50,2000,["leer","dormir","jugar"]);
let imc = persona1.calcularImc();
let currentYear = new Date().getFullYear();
let age = persona1.age(currentYear);
persona1.printAll()
persona1.printHobbies()
console.log(`el indice de masa corporal es ${imc} y mi edad es ${age}` );


