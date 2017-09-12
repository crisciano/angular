import { Component, Input, OnInit, ElementRef } from '@angular/core';
import $ from 'jquery'

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

  element: ElementRef;

  	constructor(element: ElementRef) { 
      this.element = element;
    }

    	ngOnInit(){
    		this.titulo = 
    			this.titulo.length > 7 ?
    			this.titulo.substr(0,7) + '...' :
    			this.titulo;
    	}

      fadeOut(cb){
        $(this.element.nativeElement).fadeOut(cb);
      }

}
