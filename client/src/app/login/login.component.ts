import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies'
import { Router } from '@angular/router'
import { toast } from 'angular2-materialize'

//https://www.youtube.com/watch?v=v6DBckux6lM
//https://www.youtube.com/watch?v=T_Ro3kaYYCE

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: Object = { }
	router: Router;

	// @Input() password : string = '';
	// @Input() email : string = '';


	constructor(router: Router) {
		this.router = router;
	}

	ngOnInit() {
	}

	authentication(e){
		let uEmail = this.user['email'];
		let uPass = this.user['password'];
		let key = btoa(btoa(uEmail) +'??'+ btoa(uPass));

		document.cookie = 'sessionID='+key;

		if (this.user['email'] == 'teste@teste.com' && this.user['password'] == '123') { 
			this.router.navigate(['cadastro'])
			console.log('login true')
			toast('Login true!', 4000, 'green');
		} else {
			this.router.navigate(['login'])
			console.log('login false')
			toast('Login negado!', 4000, 'red');
			this.user = {}
		}

		// Cookie.setCookie('sessionID', key);

		let email = atob(atob(key).split('??')[0]);
		let pass = atob(atob(key).split('??')[1]);
		console.log(this.user);
		// console.log(key);
		// console.log(pass);
	}

}
