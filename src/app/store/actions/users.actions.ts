import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuario Success',
    props<{users: User[]}>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuario Error',
    props<{payload: any}>()
);
