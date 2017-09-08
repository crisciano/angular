import { Component } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from '../foto/foto.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{ 
	foto: FotoComponent = new FotoComponent();
	// meuForm: FormGroup;

	constructor(private service: FotoService, fb: FormBuilder ){

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
			}, err => console.log(err))
        
	}
}
