import { SET_ANNOTATIONS } from '../actions/annotation';

export default function(state = null, action) {
    switch(action.type) {
        case SET_ANNOTATIONS:
            return action.annotations;
        default:
            return state;
    }
}