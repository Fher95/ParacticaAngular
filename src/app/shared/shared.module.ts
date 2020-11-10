import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ContenedorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [ContenedorComponent]
})
export class SharedModule { }
