//TYPESCRIPT SERVICES de bored

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Indica que este servicio debe ser proporcionado en el nivel raíz de la aplicación Angular
})
export class BoredService {

  private baseUrl = 'https://www.boredapi.com/api/activity'; // URL base para las solicitudes a la API

  constructor(private http: HttpClient) { } // Constructor del servicio que inyecta HttpClient para realizar solicitudes HTTP

  getActivity(): any { 
    return this.http.get(this.baseUrl); // Método para obtener una actividad aleatoria de la API, realizando una solicitud GET a la URL base
  }
}

