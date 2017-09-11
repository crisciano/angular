import { Component } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from '../foto/foto.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{ 
	title: string = 'Cadastrar foto';
	foto: FotoComponent = new FotoComponent();
	route: ActivatedRoute;
	router: Router;
	// meuForm: FormGroup;

	constructor(private service: FotoService, route: ActivatedRoute, router: Router ){
		this.service = service;
		this.route = route;
		this.router = router;

		this.route.params.subscribe( params => {
			let id = params['id'];

			if (id) {  
				this.title = "Editar foto";
				this.service
					.buscaId(id)
					.subscribe( foto => this.foto = foto,
								err => console.log(err) )
			}
			console.log(params)


		})

		// this.meuForm = fb.group({
		// 	titulo: ['', Validators.required],
		// 	url: ['', Validators.required],
		// 	description: ['',Validators.required]
		// });
	}

	add(e) {
		e.preventDefault()
		console.log(this.foto);

		this.service
			.add(this.foto)
			.subscribe(() => {
				console.log('Foto cadastrada com sucesso!! ')
				this.foto = new FotoComponent();
				this.router.navigate(['/listagem']);
			}, err => console.log(err))
        
	}
}
