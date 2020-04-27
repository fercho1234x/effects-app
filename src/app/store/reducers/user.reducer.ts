import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { User } from '../../models/user.model';

export interface UsuarioState {
    id: string;
    users: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const userInitialState: UsuarioState = {
    id: null,
    users: null,
    loaded: false,
    loading: false,
    error: null
};

const _userReducer = createReducer(userInitialState,

    on(cargarUsuario, (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
    on(cargarUsuarioSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: {...user}
    })),
    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
}