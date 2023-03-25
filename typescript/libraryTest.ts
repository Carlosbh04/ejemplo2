import { library } from "./library";
import { book } from "./book";

let books: book[] = [
    new book("intoducion a javascript",233,"2344433-BC23333","joseph smith", "now editions")  
]

let Library = new library(books,"infante don luis","carlos hernandez");
console.log(Library.toString());

console.log(Library.getNumberOfBooks());
console.log(Library.findByAuthor("joseph smith"));

