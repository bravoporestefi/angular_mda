//TYPESCRIPT de error

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para utilizar la funcionalidad de enlace bidireccional [(ngModel)] en los formularios.
import { ErroresService } from '../../services/errores.service'; 

@Component({
  selector: 'app-errores', // Define el selector de este componente como 'app-errores'.

  standalone: true, // Establece que este componente sea independiente, lo que significa que no depende de ningún otro módulo para su funcionalidad.

  imports: [FormsModule], // Importa FormsModule para habilitar la funcionalidad de formularios en este componente.

  templateUrl: './errores.component.html', // Especifica la ubicación del archivo HTML que contiene la plantilla para este componente.

  styleUrl: './errores.component.css' // Especifica la ubicación del archivo CSS que contiene los estilos para este componente.
})

export class ErroresComponent {

  private servicio = inject(ErroresService); // Crea una instancia del servicio ErroresService utilizando el método inject() .

  idError : number = 404; // Declara e inicializa la variable idError con un valor predeterminado.

  img: string = ""; // Declara e inicializa la variable img como una cadena vacía.

  buscarError(){ // Define el método buscarError(), que se ejecuta cuando se hace clic en el botón de búsqueda en la plantilla HTML.
    this.img = this.servicio.sacarError(this.idError); // Llama al método sacarError() del servicio ErroresService, pasando el idError como argumento, y asigna el resultado a la variable img.
  }
}
