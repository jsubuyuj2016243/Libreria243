import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model'; 
import { RestBookService } from 'src/app/services/restBook/rest-book.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.scss'],
  providers: [ RestBookService ]
})
export class PrestamoComponent implements OnInit {
  Book:Book
  libros;

  constructor(public bookService: RestBookService) {
    this.Book = new  Book('','','','','','','','',null,null,'','')
   }

  ngOnInit(): void {
    this.showBook();
  }

  showBook(){
    this.bookService.showBook().subscribe(
      response =>{
        console.log(response);
        this.libros = response;
        console.log(this.Book)
      }
    )
  }

}
