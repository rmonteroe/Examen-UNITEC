import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';
import { ContactosService } from '../services/Contactos.service';
import { Contactos } from '../modules/Contactos';

@Component({
	selector: 'contactos_list',
	templateUrl:'../views/contactos.html',
	providers:[ContactosService]
})
export class contactosListComponent{
	public titulo = "Listado de Contactos ";
	public parametro:any;
	public contactos:Contactos[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _contactosServices:ContactosService
	){}

	ngOnInit(){
		console.log('Color de Header global :' + GLOBAL.header_color);

		this._contactosServices.getContactos().subscribe(
			result => {
				this.contactos = result;
	
				if(!this.contactos){
					console.log("Error en el servidor");
				}
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			});

	}

	redirigir(){
		//this._router.navigate(['/contacto','victorroblesweb.es']);
	}

	redirigirDos(){
		//this._router.navigate(['/pagina-principal']);
	}
}