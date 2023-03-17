const person = require("./person");
const Contacts = require("./poo/constacts");


const contacts = new Contacts();

let persona1 = new person('carlos',175,50,2000,["leer","dormir","jugar"]);

contacts.agregarPerson(persona1)
contacts.printPersons();


