import { SET_FIELD, ANNOTATION_SAVED_SUCESS, SET_ALL_FIELDS_ANNOTATION, RESET_FORM } from "../actions/annotation";

const INITIAL_STATE = {
    initialPage: '',
    finalPage: '',
    quote: '',
    note: '',
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const clonedState = { ...state };
            clonedState[action.field] = action.value;
            return clonedState;
        case ANNOTATION_SAVED_SUCESS:
            return INITIAL_STATE;
        case SET_ALL_FIELDS_ANNOTATION:
            return action.annotation;
        case RESET_FORM:
            return {...INITIAL_STATE, initialPage: action.currentPage};
        default:
            return state;
    }
}