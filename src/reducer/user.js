import {LOGIN, OUT, SUCCESS, FAIL} from '../constants'
import {Map} from 'immutable'
const defaultUserState = Map({
    error: '',
    username: ''
})
export default (userState = defaultUserState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case  LOGIN + SUCCESS:
            return userState
                .set('username', payload.username)
                .set('error', '');
        case LOGIN + FAIL:
            return userState
                .set('error', payload.message);
        case LOGIN + OUT:
            return userState
                .set('username', '');
        default:
            return userState;

    }
}