import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';
import { ContactosService } from '../services/Contactos.service';
import { Contactos } from '../modules/contactos';

@Component({
	selector: 'contactos_add',
	templateUrl:'../views/contactos_add.html',
	providers:[ContactosService]
})
export class ContactosAddComponent{
	public titulo = "Agregar de contactos";
	public parametro:any;
	public contacto:Contactos;
	public filename:string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _contactos_Services:ContactosService
	){
		this.contacto = new Contactos("","","","","","");
	}


	onSubmit(){
		console.log(this.contacto);

	
		this._contactos_Services.AddContactos(this.contacto).subscribe(
			result => 	{
			this._router.navigate(['/contactosList']);
							console.log(result);
						
					},
			error => 	{
						var errorMessage = <any>error;
						console.log(errorMessage);
					});
	}


}