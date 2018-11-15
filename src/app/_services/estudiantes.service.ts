import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../_interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private readonly API_URL = 'http://localhost:3000/students';
  addStudents: Students;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(this.API_URL);
  }

  crear(students: Students){
    return this.http.post(this.API_URL, students);
  }

  eliminar(_id: string){
    return this.http.delete(this.API_URL + `/${_id}`);
  }
}
