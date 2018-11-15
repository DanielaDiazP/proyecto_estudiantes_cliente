import { Component, OnInit } from '@angular/core';
import { Users } from '../../_interfaces/users';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  protected users: Users[] = [];
  usuarios:any = {};

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  crearUsuario(usuarios){
    console.log(this.usuarios);
    this.usersService.crear(usuarios).subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }
}
