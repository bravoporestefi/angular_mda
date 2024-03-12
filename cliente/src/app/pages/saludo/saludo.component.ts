//TYPESCTIPT de componente saludo

import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  styleUrls: ['./saludo.component.css'],
  template: `
    <div class="contenedor mt-5 mb-5 ">
      <!-- Mensaje de saludo -->
      <h2>{{ message }}</h2>
    </div>
  `,
})
/* Clase que genera un mensaje por pantalla */
export class SaludoComponent {
  // Mensaje de saludo
  message: string = '¡Hola, mundo! ¡Hola Camilo!';
}



