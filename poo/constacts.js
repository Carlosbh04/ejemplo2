const person = require("./person");



class Contacts {
    constructor(){
        this.persons = [];
    }
   agregarPerson (person){
    this.persons.push(person);
   }
   printPersons(){
    this.persons.forEach(person =>{
        console.log(`nombre es ${person.name} - altura ${person.altura} - peso ${person.peso} - año de nacimiento ${person.yearOfBirth} - hobbies ${person.hobbies}`);
    });
   } 
}




// const contacts = new Contacts();

// let persona1 = new person('carlos',175,50,2000,["leer","dormir","jugar"]);

// contacts.agregarPerson(persona1)
// contacts.printPersons();

module.exports = Contacts;

