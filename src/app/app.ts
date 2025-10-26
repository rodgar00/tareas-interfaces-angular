import { Component, signal } from '@angular/core';
import { Tareas } from './tareas/tareas';

@Component({
  selector: 'app-root',
  template: '<app-tareas></app-tareas>',
  imports: [
    Tareas
  ],
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('EjercicioTareasInterfaces');
}
