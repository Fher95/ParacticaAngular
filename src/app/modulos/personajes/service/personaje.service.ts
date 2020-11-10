import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogoModelo, Personaje } from '../model/personaje.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PersonajeService {

  constructor(private httpClient: HttpClient ) { }

  public obtenerCatalogo(nombreCatalogo: string): Observable<CatalogoModelo[]> {
    return this.httpClient.get<CatalogoModelo[]>(`${environment.urlBackEnd}/catalogo/${nombreCatalogo}`);
  }

  public guardarPersonaje(personaje: Personaje): void {
    console.log(personaje);
  }

}
