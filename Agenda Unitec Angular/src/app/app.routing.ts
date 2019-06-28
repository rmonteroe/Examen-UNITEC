import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { contactosListComponent } from './components/contactos_list.component';
import { ContactosAddComponent } from './components/contactos_add.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'contactosList', component: contactosListComponent},
	{path: 'contactosAdd', component: ContactosAddComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);