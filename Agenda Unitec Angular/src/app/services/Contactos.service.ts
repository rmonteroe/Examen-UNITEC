import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from '../services/global';
import { Contactos } from '../modules/Contactos';
//import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class ContactosService{
	public url: string;
	public urlAdd: string;
	public contactos:Contactos[];

	constructor(
		private _http:Http,

		){
		this.url = GLOBAL.url;

	}

	AddContactos(contactos:Contactos)
	{

		let json = JSON.stringify(contactos);
		console.log('desde el servicio json' + json);
		let params = json;
		console.log('desde el servicio params ' + params);
		let headers = new Headers({'Content-Type': 'application/json'} );

		return this._http.post(this.url + 'PutAgendaUnitec',params,{headers:headers})
		                 .map(res => res.json());

	}

	getContactos(){
		return this._http.get(this.url + 'GetAgendaUnitec')
		                 .map(res => res.json());
	}


}