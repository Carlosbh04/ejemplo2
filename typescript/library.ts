import { book } from "./book"


export class library{
    private books: book [];
    private address: string;
    private manager: string;
  
    constructor(books: book[],address: string,manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;

    }
    getAddress():string{
        return this.address;
    }
    setAddress(adress:string) {
        this.address = adress;
    }
    getManager(): string{
        return this.manager;
    }
    setManager(manager:string) {
        this.manager = manager;
}
  toString():string{
    let info = '';

    for(let book of this.books){
info += `book1: \n Title - ${book.getTitle()}\n number of page - ${book.getNpages()}\n Isbn - ${book.getIsbn()}\n author - ${book.getAuthor()}\n editorial - ${book.getEditorial()}\n`
    }
    return info;
  }
 getNumberOfBooks():number{
    return this.books.length;
 }
 findByAuthor(author:string):book[]{
    return this.books.filter((book)=> book.getAuthor() === author)
 }
}


// let books: book[] = [
//     new book("intoducion a javascript",233,"2344433-BC23333","joseph smith", "now editions")  
// ]

// let Library = new library(books,"infante don luis","carlos hernandez");
// console.log(Library.toString());

// console.log(Library.getNumberOfBooks());
// console.log(Library.findByAuthor("joseph smith"));

