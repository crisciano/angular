import { Component, Input } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'foto',
	templateUrl: './foto.component.html'
})


export class FotoComponent{
	@Input() url : string = '';
	@Input() titulo : string = '';
	_id : string = '';
	descricao : string = '';
	valor: number;
}