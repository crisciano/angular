import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies'

//https://www.youtube.com/watch?v=v6DBckux6lM

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: Object = { }

	// @Input() password : string = '';
	// @Input() email : string = '';


	constructor() { }

	ngOnInit() {
	}

	authentication(e){
		let uEmail = this.user['email'];
		let uPass = this.user['password'];
		let key = btoa(btoa(uEmail) +'??'+ btoa(uPass));

		Cookie.setCookie('sessionID', key);

		let pass = atob(atob(key).split('??')[1]);
		console.log(this.user);
		console.log(key);
		console.log(pass);
	}

}
