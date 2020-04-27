import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get( `${this.url}/users?page=1?per_page=6&&delay=5` )
    .pipe(
      map( (resp: any) => resp.data )
    );
  }

  getUser( id: string ) {
    return this.http.get( `${this.url}/users/${id}` )
    .pipe(
      map( (resp: any) => resp.data )
    );
  }

}
