import { person } from "./person";
import { contacts } from "./contacts";



let Contacs = new contacts();

Contacs.people.push(new person("carlos",23,"infante don luis"))
Contacs.prinCalendar();
