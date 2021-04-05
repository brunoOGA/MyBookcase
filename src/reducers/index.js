import { combineReducers } from 'redux';
import bookForm from './bookForm';
import booksReducer from './booksReducer';
import annotationForm from './annotationForm';
import annotationsReducer from './annotationsReducer';
import userReducer from './userReducer';


export default combineReducers({
    user: userReducer,
    bookForm: bookForm,
    listaBooks: booksReducer,
    annotationForm: annotationForm,
    listaAnnotations: annotationsReducer
})