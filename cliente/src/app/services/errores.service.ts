//TYPESCRIPT SERVICIOS de error.

import { Injectable, inject } from '@angular/core';

  
@Injectable({
  providedIn: 'root' // Indica que este servicio se proporcionará en el nivel raíz de la aplicación Angular.
})

//Exportar y crear la clase ErroresService.
export class ErroresService {

  private url = 'https://http.dog/' // Declara una variable privada 'url' que almacena la URL base para las imágenes de errores.

  // Define un método 'sacarError()' que toma un número 'id' como argumento y devuelve una cadena que representa la URL de una imagen de error.
  // El número 'id' se concatena a la URL base para formar la URL completa de la imagen.
  sacarError(id: number): string {
    return `${this.url}${id}.jpg` // Retorna la URL completa de la imagen concatenando la URL base con el 'id' y la extensión de archivo '.jpg'.
  }
  
}