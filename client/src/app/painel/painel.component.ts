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

  	constructor() { }

    	ngOnInit(){
        this.descricao;
    		this.titulo = 
    			this.titulo.length > 7 ?
    			this.titulo.substr(0,7) + '...' :
    			this.titulo;
    		
    	}

}
