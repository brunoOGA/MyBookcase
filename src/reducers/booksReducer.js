import { SET_BOOKS } from '../actions';

export default function(state = null, action) {
    switch(action.type) {
        case SET_BOOKS:
            return action.books;
        default:
            return state;
    }
}