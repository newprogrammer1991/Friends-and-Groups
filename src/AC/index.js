import {LOGIN, OUT, LOAD_FRIENDS, LOAD_GROUPS, SUCCESS, FAIL, START,} from '../constants'

export function handleLogin() {
    return (dispatch, getState) => {
        const {user} = getState();
        dispatch({
            type: LOGIN
        })
        if (user.get('username')) {
            console.log(user.username)
            VK.Auth.logout((r) => {
                dispatch({
                    type: LOGIN + OUT
                })
            })
            return;
        }
        VK.Auth.login((r) => {
            if (r.session) {
                let username = r.session.user.first_name;
                dispatch({
                    type: LOGIN + SUCCESS,
                    payload: {username}
                })
            }
            else {
                dispatch({
                    type: LOGIN + FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        })
    }
}

export function getFriends() {
    return (dispatch) => {
        dispatch({
            type: LOAD_FRIENDS + START
        })
        VK.Api.call('friends.get', {fields: ['photo_100'], count: 10}, (r) => {
            const result = r.response;
            if (result) {
                dispatch({
                    type: LOAD_FRIENDS + SUCCESS,
                    payload: {result}
                })
            }
            else {
                dispatch({
                    type: LOAD_FRIENDS + FAIL,
                    error: true,
                    payload: new Error('Ошибка загрузки')
                })
            }
        })
    }
}

export function getGroups(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_GROUPS + START
        })
        VK.Api.call('groups.get', {user_id: id, extended: true}, (r) => {
            const result = r.response.slice(1);
            if (result) {
                dispatch({
                    type: LOAD_GROUPS + SUCCESS,
                    payload: {result, id}
                })
            }
            else {
                dispatch({
                    type: LOAD_GROUPS + FAIL,
                    error: true,
                    payload: new Error('Ошибка загрузки')
                })

            }
        })
    }
}

