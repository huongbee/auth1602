import { Store, Action } from '@ngrx/store';
import { User, Loading } from '../type';

export function userReducer(state: Store<User> = null, action: any) {
    if (action.type === 'USER_LOGIN') {
        return action.user;
    }
    if (action.type === 'USER_LOGOUT') {
        return null;
    }
    return state;
}

export function loading(state: Store<Loading> = null , action: Action) {
    if ( action.type === 'LOADING' ) { return true; }
    return false;
}
