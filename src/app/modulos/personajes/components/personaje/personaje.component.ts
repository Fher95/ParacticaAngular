import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { CatalogoModelo, Personaje } from '../../model/personaje.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.sass']
})
export class PersonajeComponent implements OnInit, OnDestroy {

  public catalogoEditorial$: Observable <CatalogoModelo[]> = this.personajeService.obtenerCatalogo('editorial');
  public catalogoTipoPersonaje$ = this.personajeService.obtenerCatalogo('tipoPersonaje');
  private unsubscribe$ = new Subject<boolean>();

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {

    // this.personajeService.obtenerCatalogo('editorial')
    // .pipe(takeUntil(this.unsubscribe$))
    // .subscribe((listaEditoriales: CatalogoModelo[]) => {
    //   console.log('Obteniendo editoriales');
    //   this.catalogoEditorial = listaEditoriales;
    // });

    // this.personajeService.obtenerCatalogo('tipoPersonaje')
    // .pipe(takeUntil(this.unsubscribe$))
    // .subscribe((listaTipoPersonajes: CatalogoModelo[]) => {
    //   console.log('Obteniendo tipos de personaje');
    //   this.catalogoTipoPersonaje = listaTipoPersonajes;
    // });


  }

  public onCuerpoPersonaje(cuerpoPersonaje: Personaje): void {
    //Desestructuración:
    // const {nombrePersonaje, ciudadOrigen, ...objeto_restante} = cuerpoPersonaje;
    // console.log(objeto_restante);
    this.personajeService.guardarPersonaje(cuerpoPersonaje);

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
