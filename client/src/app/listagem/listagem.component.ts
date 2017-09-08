import { Component } from '@angular/core'
// import { Http } from '@angular/http'
import { FotoService } from '../foto/foto.service'
import { FotoComponent } from '../foto/foto.component'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

	fotos: FotoComponent[] = [];

  // constructor (http: Http) {
  constructor (service : FotoService) {
    service
      .list()
      .subscribe( fotos => {
        this.fotos = fotos;
        console.log(this.fotos);
      }, err => console.log(err) )
  	// http
   //  .get('http://localhost:3000/v1/fotos')
   //  .map(res => res.json())
  	// .subscribe(fotos => { this.fotos = fotos; console.log( fotos ) }, 
   //              err => console.log(err))
  }

  delete(foto){
    console.log(foto);

  }

}
