import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions/user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}

    cargarUsuario$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                cargarUsuario
            ),
            mergeMap(
                ( action ) => {
                    return this.usersService.getUser( action.id )
                        .pipe(
                            map( user => cargarUsuarioSuccess( { user } ) ),
                            // of para crear un observable
                            catchError( error => of( cargarUsuarioError( { payload: error } ) ) )
                        );
                }
            )
        );
    });

}
