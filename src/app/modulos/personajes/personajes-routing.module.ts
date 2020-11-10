import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ComponentePruebaComponent } from './components/componente-prueba/componente-prueba.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajeComponent
  }, {
    path: 'prueba',
    component: ComponentePruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
