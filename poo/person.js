class person{
    constructor(name,altura,peso,yearOfBirth,hobbies){
        this.name = name
        this.altura = altura;
        this.peso = peso;  
        this.yearOfBirth = yearOfBirth; 
        this.hobbies = hobbies;
}
   calcularImc(){
    let alturas = this.altura /100;
    return this.peso / (alturas **2 );
   }
   age(currentYear){
    return currentYear - this.yearOfBirth
   }
   printAll(){
    console.log(`altura: ${this.altura} - peso ${this.peso} - año de nacimiento ${this.yearOfBirth}`);
   }
   printHobbies(){
    console.log(`las aficiones de ${this.name} son :`);
    this.hobbies.forEach(hobby => {
        console.log(`- ${hobby}`);
        
    });
   }
}

module.exports = person;

// let persona1 = new person('carlos',175,50,2000,["leer","dormir","jugar"]);
// let imc = persona1.calcularImc();
// let currentYear = new Date().getFullYear();
// let age = persona1.age(currentYear);
// persona1.printAll()
// persona1.printHobbies()
// console.log(`el indice de masa corporal es ${imc} y mi edad es ${age}` );



