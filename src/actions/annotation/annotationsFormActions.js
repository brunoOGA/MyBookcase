import firebase from "firebase";

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const ANNOTATION_SAVED_SUCESS = 'ANNOTATION_SAVED_SUCESS';

export const annotationSavedSucess = () => {
    return {
        type: ANNOTATION_SAVED_SUCESS
    }
}

export const SET_ALL_FIELDS_ANNOTATION = 'SET_ALL_FIELDS_ANNOTATION';

export const setAllFields = annotation => ({
    type: SET_ALL_FIELDS_ANNOTATION,
    annotation: annotation
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
})

export const saveAnnotation = (book, annotation) => {
    const { currentUser } = firebase.auth();

    return async dispatch => {
        if(annotation.id) {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/books/${book.id}/annotations/${annotation.id}`)
            .set(annotation);
        } else {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/books/${book.id}/annotations/`)
            .push(annotation);
        }
       

        dispatch(annotationSavedSucess());
    }
}