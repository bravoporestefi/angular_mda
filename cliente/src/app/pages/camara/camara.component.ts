//TYPESCRIPT del componente cámara

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera', // Selector del componente
  templateUrl: './camara.component.html', // Ruta de la plantilla HTML
  styleUrls: ['./camara.component.css'] // Ruta de los estilos CSS
})

export class CamaraComponent {
  // Decorador @ViewChild para obtener una referencia al elemento de vídeo en la plantilla
  @ViewChild('cameraFeed', { static: true }) cameraFeed: ElementRef = {} as ElementRef;
  // Propiedades para almacenar la transmisión de la cámara y controlar su visibilidad
  cameraStream: MediaStream | null = null;
  cameraVisible = false;

  // Método para abrir la cámara
  openCamera() {
    // Accedemos a los dispositivos multimedia y solicitamos permiso para usar la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Si se obtiene la transmisión de la cámara con éxito
        this.cameraVisible = true; // Hacemos visible el elemento de vídeo
        this.cameraFeed.nativeElement.srcObject = stream; // Asignamos la transmisión al elemento de vídeo
        this.cameraStream = stream; // Almacenamos la transmisión en la propiedad cameraStream
      })
      .catch((error) => {
        // Si hay algún error al acceder a la cámara
        console.error('Error accessing camera: ', error); // Mostramos el error en la consola
      });
  }

  // Método para cerrar la cámara
  closeCamera() {
    if (this.cameraStream) {
      // Si hay una transmisión de cámara activa
      this.cameraStream.getTracks().forEach((track) => {
        track.stop(); // Detenemos todos los tracks de la transmisión
      });
      this.cameraVisible = false; // Ocultamos el elemento de vídeo
    }
  }
}
