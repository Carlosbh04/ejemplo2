

 export class book {
   private title: string;
   private nPages: number;
   private isbn: string;
   private author: string;
   private editorial: string;

constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
}
getTitle():string{
    return this.title;
}
setTitle(title:string): void{
  this.title = title;
}
getNpages():number{
    return this.nPages;
}
setNpages(nPages:number): void{
    this.nPages = nPages;
}
getIsbn():string{
    return this.isbn;
}
setIsbn(isbn:string): void{
    this.isbn = isbn;
}
getAuthor():string{
    return this.author;
}
setAuthor(author:string): void{
    this.author = author;
}
getEditorial():string{
    return this.editorial;
}
setEditorial(editorial:string): void{
    this.editorial = editorial;
}
toString():string{
    return `title - ${this.title}\n number of pages - ${this.nPages}\n isbn - ${this.isbn}\n author - ${this.author}\n editorial - ${this.editorial}\n`
}
}


// let Book = new book("Introducion a javascritp",233,"2344433-BC2333","joseph Smith","Now Editions")

// console.log(Book.toString());
