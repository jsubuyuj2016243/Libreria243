import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model'; 
import { RestBookService } from 'src/app/services/restBook/rest-book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [ RestBookService ]
})
export class BooksComponent implements OnInit {
  Book:Book
  libros;
  idBook: Book;

  constructor(public bookService: RestBookService) {
    this.Book = new  Book('','','','','','','','',null,null,'','')
    this.idBook = new Book('','','','','','','','',null,null,'','')
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

  deleteBook(idBook){
    this.bookService.deleteBook(idBook).subscribe(
      response=>{
        console.log(response);
        this.showBook()
      }
    )
  }
  
  seguridadEliminar(idBook){
    this.bookService.buscarLibroID(idBook).subscribe(
      response=>{
        this.idBook = response;
        Swal.fire({
          title: '¿Quieres eliminar el libro: ' + this.idBook.titulo,
          text: "Esta accion es irreversible",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteBook(this.idBook._id)
            Swal.fire(
              'El libro a sido eliminado exitosamente',
            )
          }
        })
  
      }
    )
  }

}
