import { Component } from '@angular/core';

@Component({
  selector: 'app-practicando',
  imports: [],
  templateUrl: './practicando.html',
  styleUrl: './practicando.scss'
})
export class Practicando {
  x: number = 0;
  nombre: string = "Rodrigo";
  val: boolean = true;
  alumnos: string [] = ["Rodrigo", "Josue", "Camilo"];
  alumnos_dict: {} = {}
  logged: boolean | null = null;
  y: any = null; //Cualquier cosa
  mensajeClicks: string = "Hemos superado los 10 clicks";
  salir: boolean = false;

  aumentarClics(): void {
    if (this.salir) return;
    this.x++;
    if (this.x >= 10) {
      alert(this.mensajeClicks);
      this.salir = true;
    }
  }

  restarClicks(): void {
    if (this.salir) return;
    if (this.x > 0) {
      this.x--;
    } else {
      alert("No puedes restar más");
      this.salir = true;
    }
  }

  resetearClicks(): void {
    if (this.salir) return;
    this.x = 0;
    this.salir = false;
    alert("Reseteado");
  }
}
