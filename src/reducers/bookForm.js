import { SET_FIELD, CURRENTPAGE_SAVED_SUCESS, BOOK_SAVED_SUCESS, SET_ALL_FIELDS, RESET_FORM } from "../actions";

const INITIAL_STATE = {
    title: '',
    author: '',
    currentPage: '0',
    totalPages: '',
    year: '',
    literaryGenre: '',
    cover: '',
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const clonedState = { ...state };
            clonedState[action.field] = action.value;
            return clonedState;
        case BOOK_SAVED_SUCESS:
            return INITIAL_STATE;
        case CURRENTPAGE_SAVED_SUCESS:
            return action.book;
        case SET_ALL_FIELDS:
            return action.book;
        case RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}