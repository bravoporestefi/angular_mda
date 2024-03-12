import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  busqueda: string = "";

  constructor(private router: Router) { } 
  public buscar() { // Para navegar a una ruta específica en  Angular, utilizando el servicio Router y la ruta this.busqueda.
    this.router.navigate([`/${this.busqueda}`]) 
  }
}

