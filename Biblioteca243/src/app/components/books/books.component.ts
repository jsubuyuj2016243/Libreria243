import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model'; 
import { RestBookService } from 'src/app/services/restBook/rest-book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [ RestBookService ]
})
export class BooksComponent implements OnInit {
  Book:Book
  libros;

  constructor() {

   }

  ngOnInit(): void {

  }

 

}
