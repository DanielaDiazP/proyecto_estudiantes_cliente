import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../_services/estudiantes.service';
import { Students } from '../../_interfaces/students';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  students: Students[] = [];

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
    this.listarEstudiantes();
  }

  listarEstudiantes(){
    this.estudiantesService.listar().subscribe((students: Students[]) => {
      console.log(students);
      this.students = students;
    })
  }
}
