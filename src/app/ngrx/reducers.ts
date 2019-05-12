import { Store } from '@ngrx/store';
import { User } from '../type';

export function userReducer(user: Store<User> = null, action: any) {
    if (action.type === 'USER_LOGIN') {
        return action.user;
    }
    if (action.type === 'USER_LOGOUT') {
        return null;
    }
}
