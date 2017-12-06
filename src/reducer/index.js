import {combineReducers} from 'redux'
import user from './user'
import friends from './friends'
import groups from './groups'

export default combineReducers({
    user: user,
    friends: friends,
    groups: groups
})