//TYPESCRIPT de bored

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BoredService } from '../../services/bored.service';

@Component({
  selector: 'app-bored', // Selector del componente Angular
  standalone: true, // Indica que este componente es independiente
  templateUrl: './bored.component.html', // Ubicación del archivo de plantilla HTML para este componente
  styleUrls: ['./bored.component.css']  // Ubicación del archivo CSS de estilos para este componente
})

export class BoredComponent implements OnInit {

  activity: any; // Variable para almacenar la actividad obtenida del servicio
  error: string | null = null;  // Variable para almacenar mensajes de error, inicializada como nula

  constructor(private boredService: BoredService, private http: HttpClient) { }  // Constructor del componente que inyecta el servicio BoredService y HttpClient

  ngOnInit(): void {
    this.getActivity(); // Método ngOnInit() que se ejecuta cuando se inicializa el componente, llamando al método getActivity() para obtener una actividad
  }

  getActivity(): void {
    this.boredService.getActivity()  // Método para obtener una actividad a través del servicio boredService
      .subscribe((response: any) => { // Suscripción al observable que maneja la respuesta del servicio
        this.activity = response; // Almacenar la actividad recibida en la variable activity
      }, (error: { message: string; }) => { // Manejo de errores
        this.error = error.message || 'Ha ocurrido un error.';  // Almacenar el mensaje de error o un mensaje predeterminado en caso de error
      });
  }
}