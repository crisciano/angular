import { Http, Headers, Response } from '@angular/http'
import { FotoComponent } from './foto.component'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class FotoService {

	headers: Headers;
	url: string = '//localhost:3000/v1/fotos'; 

	constructor(private http: Http) {
		this.http = http;
		this.headers = new Headers();
		this.headers.append('Content-Type','application/json');
	}

	add(foto: FotoComponent): Observable<Response>{

		return this.http
			.post(this.url, JSON.stringify(foto), { headers: this.headers })

	}
	list(): Observable<FotoComponent[]>{
		return this.http
		    .get(this.url)
		    .map(res => res.json())

	}
	delete(){

	}
}