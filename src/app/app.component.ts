import { Component } from '@angular/core';

interface Entrada {
  titulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo1 = 'Registro de Usuarios';
  mensaje = "";
  existe = false;
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  entradas: Entrada[];

  constructor() {
    this.entradas = [
      { titulo: "World 2 Meet" },
      { titulo: "Iberostar" },
      { titulo: "Jet2" },
      { titulo: "NewBlue" },
      { titulo: "Kannak" },
    ]
  }

  registrarUsuario() {
    this.existe = true
    this.mensaje = "Usuario Registrado con éxito"
  }
}


