import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { User } from '../../models/user.model';

export interface UsuariosState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usersInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

const _usersReducer = createReducer(usersInitialState,

    on(cargarUsuarios, state => ({ ...state, loading: true})),
    on(cargarUsuariosSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),

);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}