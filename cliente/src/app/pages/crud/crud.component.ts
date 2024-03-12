// Importaciones necesarias para el componente CRUD
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para manejar formularios en Angular
import { CrudService } from '../../services/crud.service'; // Importa el servicio CrudService

@Component({
  // Define el selector del componente
  selector: 'app-crud',
  // Define el modo independiente del componente
  standalone: true,
  // Importa los componentes y módulos necesarios para este componente
  imports: [FormsModule],
  // Define la ubicación del archivo HTML que contiene el template del componente
  templateUrl: './crud.component.html',
  // Define la ubicación del archivo SCSS que contiene los estilos del componente
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  // Array para almacenar los Gatos
  gatos: any[] = [];
  
  // Constructor del componente, inyecta el servicio CrudService
  constructor(private crudService: CrudService) {}

  // Objeto para almacenar el nuevo Gato
  nuevoGato = {
    nombre: "",
    color: "",
  }
  
  // Indicador de error
  error: boolean = false;
  
  // Índice del Gato a editar
  editar?: number;

  // Método para establecer el índice del Gato a editar
  editarGato(index: number) {
    console.log(index)
    this.editar = index;
  }
  
  // Método que se ejecuta al iniciar el componente
  ngOnInit() {
    // Carga los Gatos al iniciar el componente
    this.mostrarGatos()
  }
  
  // Método para obtener y mostrar los Gatos
  mostrarGatos() {
    this.crudService.getAllGatos().subscribe(
      // Éxito al obtener los Gatos
      (data: any) => {
        console.log(data)
        this.gatos = data;
      },
      // Error al obtener los Gatos
      (error: any) => {
        console.error('Error al obtener Gatos', error);
      }
    );
  }

  // Método para crear un nuevo Gato
  createGatos() {
    if (this.nuevoGato.nombre != "" && this.nuevoGato.color != "") {
      // No hay error, procede a crear el Gato
      this.error = false;
      this.crudService.createGato(this.nuevoGato).subscribe(
        // Éxito al crear el Gato
        () => {
          console.log('Gato creado exitosamente');
          this.nuevoGato = { nombre: '', color: '' };
          this.mostrarGatos(); // Vuelve a cargar los Gatos después de crear uno nuevo
        },
        // Error al crear el Gato
        (error: any) => {
          console.error('Error al crear Gato', error);
          this.mostrarGatos(); // Vuelve a cargar los Gatos después de crear uno nuevo
        }
      );
    }
    else {
      // Hay un error
      this.error = true;
    }
  }

  // Método para eliminar un Gato
  deleteCat(id: string) {
    this.crudService.deleteCat(id).subscribe(
      // Éxito al eliminar el Gato
      () => {
        console.log('Gato eliminado exitosamente');
        this.mostrarGatos(); // Vuelve a cargar los Gatos después de eliminar uno
      },
      // Error al eliminar el Gato
      (error: any) => {
        console.error('Error al eliminar gato', error);
      }
    );
  }

  // Método para actualizar un Gato
  updateGato(id: string, newData: any) {
    this.crudService.updateGato(id, newData).subscribe(
      // Éxito al actualizar el Gato
      () => {
        console.log('Gato actualizado exitosamente');
        this.mostrarGatos(); // Vuelve a cargar los Gatos después de actualizar uno
        this.editar = -1;
      },
      // Error al actualizar el Gato
      (error: any) => {
        console.error('Error al actualizar Gato', error);
        this.mostrarGatos(); // Vuelve a cargar los Gatos después de actualizar uno
        this.editar = -1;
      }
    );
  }
}
