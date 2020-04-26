import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  users: User;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users );
  }

}
