import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent{

	@Input() titulo: string 

  	constructor() { }

}
