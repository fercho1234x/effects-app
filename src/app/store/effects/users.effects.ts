import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { cargarUsuarios } from '../actions';
import { cargarUsuariosSuccess, cargarUsuariosError } from '../actions/users.actions';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}

    cargarUsuarios$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                cargarUsuarios
            ),
            mergeMap(
                () => {
                    return this.usersService.getUsers()
                        .pipe(
                            map( users => cargarUsuariosSuccess( { users } ) ),
                            // of para crear un observable
                            catchError( error => of( cargarUsuariosError( { payload: error } ) ) )
                        );
                }
            )
        );
    });

}
