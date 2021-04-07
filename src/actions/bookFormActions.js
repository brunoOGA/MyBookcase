import firebase from "firebase";

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const BOOK_SAVED_SUCESS = 'BOOK_SAVED_SUCESS';

export const bookSavedSucess = () => {
    return {
        type: BOOK_SAVED_SUCESS
    }
}

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';

export const setAllFields = book => ({
    type: SET_ALL_FIELDS,
    book: book
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
})

export const saveBook = book => {
    const { currentUser } = firebase.auth();

    return async dispatch => {
        if(book.id) {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/books/${book.id}`)
            .set(book);
        } else {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/books`)
            .push(book);
        }
       

        dispatch(bookSavedSucess());
    }
}

export const CURRENTPAGE_SAVED_SUCESS = 'CURRENTPAGE_SAVED_SUCESS';

export const currentPageSavedSucess = book => {
    return {
        type: CURRENTPAGE_SAVED_SUCESS,        
        book: book
    }
}

export const saveCurrentPage = book => {
    const { currentUser } = firebase.auth();

    return async dispatch => {
        await firebase
            .database()
            .ref(`/users/${currentUser.uid}/books/${book.id}`)
            .update({ currentPage: book.currentPage })

            dispatch(currentPageSavedSucess(book));
    }
}

