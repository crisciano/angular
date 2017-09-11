import { Http, Headers, Response } from '@angular/http'
import { FotoComponent } from './foto.component'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class FotoService {

	headers: Headers;
	url: string = 'http://localhost:3000/v1/fotos'; 

	constructor(private http: Http) {
		this.http = http;
		this.headers = new Headers();
		this.headers.append('Content-Type','application/json');
	}

	add(foto: FotoComponent): Observable<Response>{
		if (foto._id) { 
			return this.http
				.put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
		} else {
			return this.http
				.post(this.url, JSON.stringify(foto), { headers: this.headers })
		}
	}

	list(): Observable<FotoComponent[]>{
		return this.http
		    .get(this.url, { headers: this.headers })
		    .map(res => res.json())
	}

	update(foto: FotoComponent){

	}

	buscaId(id: string): Observable<FotoComponent>{
		return this.http
			.get(this.url + '/' + id , { headers: this.headers })
			.map(res=> res.json())
	}

	delete(foto: FotoComponent): Observable<Response>{
		return this.http
			.delete(this.url + '/' + foto._id, { headers: this.headers } )
	}
}