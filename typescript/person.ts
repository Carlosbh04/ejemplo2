export class person{
    name: string;
    age: number;

    private adress: string;

    constructor(name: string, age: number, adress: string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    printName(): void{
        console.log(this.name);
        
    }
    yearOfBirth(currentYear:number): number{
        return currentYear - this.age;
    }
    setAdress(adress : string): void{
       this.adress = adress;
    }
    getAdress():string{
        return this.adress;

    }
}

let persona2 = new person("carlos",23,"avenida padre piquer");
// console.log(persona2);

// persona2.printName();
// console.log(persona2.yearOfBirth(2023));
// persona2.getAdress();
// persona2.setAdress("infante don luis");
// console.log(persona2.getAdress());










