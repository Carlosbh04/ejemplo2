import { person } from "./person";


export class contacts{
    people: person[];

    constructor(){
        this.people = [];
    }
    prinCalendar(): void {
        this.people.forEach(person =>{
            console.log(`mi nombre es ${person.name} y tengo ${person.age} años, y vivo en ${person.getAdress()} `);
            
        })
    }
}

// let Contacs = new contacts();

// Contacs.people.push(new person("carlos",23,"infante don luis"))
// Contacs.prinCalendar();
