import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CatalogoModelo, Personaje } from '../../model/personaje.model';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrls: ['./formulario-personaje.component.sass']
})
export class FormularioPersonajeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public foods = ['primera', 'segunda', 'tercera'];
  public formulario: FormGroup;
  public validaciones;
  @Input() inCatalogoEditorial: CatalogoModelo[];
  @Input() inCatalogoTipoPersonaje: CatalogoModelo[];
  @Output() outCuerpoPersonaje = new EventEmitter<Personaje>();

  @ViewChild('formu', { static: false }) formu: NgForm;

  ngOnInit(): void {
    this.crearFormulario();
    //console.log(this.inVariable1);
  }

  public guardarInfo(): void {
    if (this.formulario.invalid) {
      return;
    }
    this.outCuerpoPersonaje.emit(this.formulario.value);
  }

  public limpiarFormulario(): void {
    this.formu.resetForm();
  }


  private crearFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nombreSuperHeroe: ['dsdsadaa', Validators.required],
      nombrePersonaje: [null, Validators.required],
      fechaPrimeraAparicion: [new Date(), Validators.required],
      ciudadOrigen: [null, Validators.required],
      imagen: [null, Validators.required],
      tipoPersonaje: [null, Validators.required],
      editorial: [null, Validators.required],
      biografia: [null, Validators.required],
      eliminar1: [null],
      elminar2: [null]
    })

  }

  private crearValidaciones() {
    this.validaciones =  {
      //nombrePersonaje = [{tipo:'required'}]
    }
  }

}
