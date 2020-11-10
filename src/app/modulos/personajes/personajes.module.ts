import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { FormularioPersonajeComponent } from './ui/formulario-personaje/formulario-personaje.component';
import { TablaPersonajeComponent } from './ui/tabla-personaje/tabla-personaje.component';
import { SharedModule } from '../../shared/shared.module';

//Materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';



//Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonajeService } from './service/personaje.service';
import { ComponentePruebaComponent } from './components/componente-prueba/componente-prueba.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PersonajeComponent, FormularioPersonajeComponent, TablaPersonajeComponent, ComponentePruebaComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [PersonajeService]
})
export class PersonajesModule { }
