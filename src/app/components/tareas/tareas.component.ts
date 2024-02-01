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

}
