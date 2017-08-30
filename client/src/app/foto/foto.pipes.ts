import { Pipe, PipeTransform } from '@angular/core'
import { FotoComponent } from './foto.component'

@Pipe({
	name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform {
	transform(fotos: FotoComponent[] , digitado: string ){

		digitado = digitado.toLowerCase();

		return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado))

		// if ( !digitado ) { 
		// 	// se nao tiver nada digitado
		// 	return fotos;
		// } else {
		// 	// se tiver algo digitado
		// 	console.log(digitado );
		// }
		// console.log(fotos);
		// console.log(digitado);

	}

}