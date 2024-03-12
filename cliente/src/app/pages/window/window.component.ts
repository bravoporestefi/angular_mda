//TYPESCRIPT del componente window

import { Component } from '@angular/core';

// Definimos el componente WindowComponent
@Component({
  selector: 'app-window', // Selector del componente
  standalone: true, // Indica si el componente es independiente
  imports: [], // Importaciones del componente (vacío en este caso)
  templateUrl: './window.component.html', // Ruta de la plantilla HTML
  styleUrl: './window.component.css' // Ruta de los estilos CSS
})

export class WindowComponent {
  newWindow: Window | null; // Referencia a la nueva ventana, inicializada en null

  constructor() {
    this.newWindow = null; // Inicializamos la referencia a la ventana en null
  }

  // Método para abrir una nueva ventana
  openWindow(): void {
    // Abrimos una nueva ventana con tamaño y posición específicos
    this.newWindow = window.open('', '', 'width=500px, height=300px, left=50px, top=300px');

    // Si la nueva ventana no es nula
    if (this.newWindow !== null) {
      // Pedimos al usuario que introduzca una cantidad de píxeles
      const prompt = this.newWindow.prompt("Indica una cantidad de píxeles por favor");

      // Si el usuario introduce una cantidad de píxeles
      if (prompt !== null) {
        console.log("El usuario pulsó aceptar en la introducción de datos");

        // Confirmamos con el usuario si desea aplicar los píxeles
        const cnmfr = this.newWindow.confirm('¿Estás seguro de aplicar esos pixeles?');
        if (cnmfr === false) {
          console.log("El usuario no estaba seguro");
        } else {
          console.log("El usuario estaba seguro");
          // Redimensionamos la ventana con los píxeles introducidos
          this.newWindow.resizeBy(Number(prompt), Number(prompt));
          console.log('Ventana redimensionada');
        }
      }
    }
  }

  // Método para cerrar la ventana
  closeWindow(): void {
    if (this.newWindow) {
      this.newWindow.close(); // Cierra la ventana nueva
    }
  }

  // Método para mover la ventana a una posición específica
  moveWindowTo(): void {
    if (this.newWindow) {
      this.newWindow.focus(); // Mantiene el foco en la página
      this.newWindow.moveTo(300, 200); // Mueve la página hasta esas coordenadas
    }
  }

  // Método para redimensionar la ventana a un tamaño específico
  resizeWindow(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(1000, 1000);
    }
  }

  // Método para desplazar la ventana actualmente abierta en una cantidad específica de píxeles.
scrollWindowBy(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.scrollBy(0, 100); // Desplaza la ventana verticalmente por 100 píxeles
  }
}

// Método para imprimir la página actualmente abierta en la ventana.
printPage(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.print(); // Imprime la página
  }
}

// Método para mostrar una alerta con el mensaje "Hola como estas" en la ventana.
windowAlert(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.alert("Hola como estas"); // Muestra una alerta con el mensaje especificado
  }
}

// Método para remover el foco de la ventana actualmente abierta.
windowBlur(): void {
  if (this.newWindow) {
    this.newWindow.blur(); // Remueve el foco de la ventana
  }
}

// Método para mostrar un cuadro de confirmación en la ventana actualmente abierta.
windowConfirm(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.confirm(); // Muestra un cuadro de confirmación en la ventana
  }
}

// Método para mover la ventana actualmente abierta por una cantidad específica de píxeles.
moveWindowBy(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.moveBy(500, 400); // Mueve la ventana horizontalmente y verticalmente
  }
}

// Método para mostrar un cuadro de diálogo de entrada en la ventana actualmente abierta.
windowPrompt(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.prompt(); // Muestra un cuadro de diálogo de entrada en la ventana
  }
}

// Método para redimensionar la ventana actualmente abierta por una cantidad específica de píxeles.
resizeWindowBy(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.resizeBy(500, 1000); // Redimensiona la ventana
  }
}

// Método para desplazar la ventana actualmente abierta a una posición específica.
scrollWindowTo(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.scrollTo(0, 200); // Desplaza la ventana a una posición específica
  }
}

// Método para detener la carga de la ventana actualmente abierta.
stopWindow(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    this.newWindow.stop(); // Detiene la carga de la ventana
  }
}

// Método para desplazar la ventana actualmente abierta hasta el final de la página.
goToEnd(): void {
  if (this.newWindow) {
    this.newWindow.focus(); // Enfoca la ventana
    // Desplaza la ventana verticalmente hasta el final de la página
    this.newWindow.scrollBy(0, this.newWindow.document.body.scrollHeight);
  }
}


}
