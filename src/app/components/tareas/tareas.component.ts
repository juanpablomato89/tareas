import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tareas[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTareas(): void {
    let tarea: Tareas = {
      nombre: this.nombreTarea,
      estado: false,
    }

    this.listaTareas.unshift(tarea);

    this.nombreTarea = '';
    console.log('listado de tareas', this.listaTareas);
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);

  }

  actualizarTarea(index: number, estado: boolean): void {
    this.listaTareas[index].estado = !estado;

  }

}
