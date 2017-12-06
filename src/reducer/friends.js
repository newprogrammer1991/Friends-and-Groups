import {LOAD_FRIENDS, LOAD_GROUPS, SUCCESS, FAIL, START} from '../constants'
import {Map} from 'immutable'
import {arrToMap} from '../helpers'

const defaultState = new Map({
    entities: new Map({}),
    isLoading: false
});

export default (startStateFriends = defaultState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case LOAD_FRIENDS + START:
            return startStateFriends.set('isLoading', true);
        case LOAD_FRIENDS + SUCCESS:
            return startStateFriends
                .set('entities', arrToMap(payload.result))
                .set('isLoading', false);
        case LOAD_FRIENDS + FAIL:
            return startStateFriends.set('isLoading', false);
        case LOAD_GROUPS + SUCCESS:
            return startStateFriends.setIn(['entities', parseInt(payload.id), 'isLoaded'], true)
        default:
            return startStateFriends;
    }
};

