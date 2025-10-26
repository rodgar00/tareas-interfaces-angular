import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.scss']
})
export class Tareas {
  noMostrar: boolean = false;

  toggle() {
    this.noMostrar = !this.noMostrar;
  }
}
