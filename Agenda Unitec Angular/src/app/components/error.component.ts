import { Component } from '@angular/core';

@Component(
	{
		selector:'error',
		templateUrl:'../views/error.html'
	}
)
export class ErrorComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'ERROR!! valio el sistema a CORRAAAAAAAAN!!!';

	}
	ngOnInit(){
		console.log('modulo error ok');
	}
}