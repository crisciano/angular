import { Component, Input, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

	@Input() titulo: string 
  @Input() descricao: string 
  @Input() url: string 
  @Input() valor: number 
  @Input() id: string

  	constructor() { }

    	ngOnInit(){
        // this.id;
        // this.valor;
        // this.descricao;
        // this.url
    		this.titulo = 
    			this.titulo.length > 7 ?
    			this.titulo.substr(0,7) + '...' :
    			this.titulo;
    		
    	}

}
