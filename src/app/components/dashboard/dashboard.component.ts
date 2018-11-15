import { Component, OnInit } from '@angular/core';
import { Students } from '../../_interfaces/students';
import { EstudiantesService } from '../../_services/estudiantes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  protected students: Students[] = [];
  estudiantes:any = {};

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
    this.listarEstudiantes();
  }

  listarEstudiantes(){
    this.estudiantesService.listar().subscribe((students: Students[]) => {
      console.log(students);
      this.students = students;
    });
  }

  crearEstudiante(estudiantes){
    //console.log(estudiantes);
    this.estudiantesService.crear(estudiantes).subscribe(estudiantes => {
      this.estudiantes = estudiantes;
      this.listarEstudiantes();
    });
  }

  eliminarEstudiante(_id: string){
    this.estudiantesService.eliminar(_id).subscribe(res => {
      console.log(res);
      this.listarEstudiantes();
    })
  }
}
