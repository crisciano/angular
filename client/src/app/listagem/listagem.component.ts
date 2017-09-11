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
  service: FotoService;

  // constructor (http: Http) {
  constructor (service : FotoService) {
    this.service = service;
    this.service
      .list()
      .subscribe( fotos => {
        this.fotos = fotos;
        console.log(this.fotos);
      }, err => console.log(err) )
  }

  update(foto){
    console.log(foto)
  }

  delete(foto){
    console.log(foto);
    this.service
      .delete(foto)
      .subscribe(() => {
              let indice = this.fotos.indexOf(foto);
              this.fotos.splice(indice, 1);
              console.log('foto excluida com sucesso!!')}, 
                  err => console.log(err))
  }

}
