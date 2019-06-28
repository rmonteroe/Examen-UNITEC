import { Component } from '@angular/core';

@Component(
	{
		selector:'home',
		templateUrl:'../views/home.html'
	}
)
export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'Home component de angular ';

	}
	ngOnInit(){
		console.log('Todo bien en el TS');
	}
}