import { combineReducers } from 'redux';
import bookForm from './bookForm';
import booksReducer from './booksReducer';
import userReducer from './userReducer';


export default combineReducers({
    user: userReducer,
    bookForm: bookForm,
    listaBooks: booksReducer
})