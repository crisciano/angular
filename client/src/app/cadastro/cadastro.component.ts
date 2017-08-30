import { Component } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{ 
	foto: FotoComponent = new FotoComponent();
	http: Http;

	constructor( http : Http){
		this.http = http;
	}

	add(e) {
		e.preventDefault()
		console.log(this.foto);

		// cria uma instância de Headers
        let headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');
        
		this.http.post('//localhost:3000/v1/fotos', JSON.stringify(this.foto), { headers })
		.subscribe(() => { 
			console.log('Foto cadastrada com sucesso!!! ');
		}, err => console.log(err) );
	}
}
