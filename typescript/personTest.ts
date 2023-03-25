import { person } from "./person";

let persona2 = new person("carlos",23,"avenida padre piquer");
console.log(persona2);

persona2.printName();
console.log(persona2.yearOfBirth(2023));
persona2.getAdress();
persona2.setAdress("infante don luis");
console.log(persona2.getAdress());


