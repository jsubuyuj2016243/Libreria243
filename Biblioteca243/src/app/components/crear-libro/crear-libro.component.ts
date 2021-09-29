import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { RestBookService } from 'src/app/services/restBook/rest-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  public book:Book;
  public libro;
  public token;

  constructor(private restBook:RestBookService, private router:Router) {
    this.libro = restBook.getBook();
    this.token = restBook.getToken();
    this.book = new Book('','','','','','','',null,null,'','')
   }

  ngOnInit(): void {
  }

  saveBook(){
    this.restBook.saveBook(this.book).subscribe((res:any)=>{
      if(res.bookSaved){
        alert(res.report);
        this.book = new Book('','','','','','','',null,null,'','');
        this.router.navigateByUrl('userMenu');    
      }else{
        alert(res.report);
      }
    },
    (error:any) => alert(error.error.report)
    )
  }

}
