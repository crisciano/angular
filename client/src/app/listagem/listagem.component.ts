import { Component } from '@angular/core'
// import { Http } from '@angular/http'
import { FotoService } from '../foto/foto.service'
import { FotoComponent } from '../foto/foto.component'
import { PainelComponent } from '../painel/painel.component'

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

  delete(foto: FotoComponent, painel: PainelComponent ){
    console.log(foto);
    this.service
      .delete(foto)
      .subscribe(() => {

        painel.fadeOut(() => {
          let novasFotos = this.fotos.slice(0);
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.fotos = novasFotos;
          console.log('foto excluida com sucesso!!')
        });
      }, 
      err => console.log(err))
  }

}
