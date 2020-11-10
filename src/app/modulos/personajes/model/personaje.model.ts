export interface Personaje {
  id: string,
  nombreSuperHeroe: string,
  nombrePersonaje: string,
  fechaPrimeraAparicion: Date,
  ciudadOrigen: string,
  imagen: string,
  tipoPersonaje: string,
  editorial: string,
  biografia: string
}

export interface CatalogoModelo {
  id: number;
  codigo: string;
  descripcion: string;
  ruta?: string;
}
