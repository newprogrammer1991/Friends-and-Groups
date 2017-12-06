import {LOAD_GROUPS, START, SUCCESS, FAIL} from '../constants'
import {Map, List} from 'immutable'
import {arrToMap} from '../helpers'

const defaultState = new Map({
    entities: new Map({}),
    isLoading: false,
    isLoaded: false
});

export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_GROUPS + START:
            return state.set('isLoading', true)
        case LOAD_GROUPS + SUCCESS:
            return state
                .set('isLoading', false)
                .set('entities', arrToMap(payload.result));
        case LOAD_GROUPS + FAIL:
            return state.set('isLoading', false);
        default:
            return state;
    }

}