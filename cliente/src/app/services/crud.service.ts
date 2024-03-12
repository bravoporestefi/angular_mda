import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient para realizar solicitudes HTTP
import { Observable } from 'rxjs'; // Importa Observable de la biblioteca RxJS para gestionar eventos asíncronos

@Injectable({
  providedIn: 'root' // Indica que este servicio estará disponible globalmente en la aplicación
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/gatos'; // URL de tu backend Node.js

  constructor(private http: HttpClient) { } // Inyecta HttpClient en el constructor para realizar solicitudes HTTP

  // Método para obtener todos los elementos
  getAllGatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Realiza una solicitud GET al servidor y devuelve un Observable de cualquier tipo
  }

  // Método para crear un nuevo elemento
  createGato(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data); // Realiza una solicitud POST al servidor con los datos proporcionados y devuelve un Observable de cualquier tipo
  }

  // Método para actualizar un elemento existente
  updateGato(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Construye la URL para actualizar el elemento con el ID proporcionado
    return this.http.put<any>(url, data); // Realiza una solicitud PUT al servidor con los datos proporcionados y devuelve un Observable de cualquier tipo
  }

  // Método para eliminar un elemento
  deleteCat(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Construye la URL para eliminar el elemento con el ID proporcionado
    return this.http.delete<any>(url); // Realiza una solicitud DELETE al servidor y devuelve un Observable de cualquier tipo
  }
}
