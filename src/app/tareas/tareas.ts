import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.scss']
})
export class Tareas {
  mostrar = false; // controla si la clase disable se aplica

  // Array de tareas
  tareas = [
    { nombre: 'Tarea 1', val: true },
    { nombre: 'Tarea 2', val: true },
    { nombre: 'Tarea 3', val: true },
    { nombre: 'Tarea 4', val: true },
    { nombre: 'Tarea 5', val: true }
  ];

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
