import firebase from "firebase";
import { Alert } from "react-native";
export const SET_BOOKS = 'SET_BOOKS';

const setBooks = books => ({
    type: SET_BOOKS,
    books: books
})

export const watchBooks = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/books`)
            .on('value', snapshot => {
                const books = snapshot.val();
                console.log(books)
                const action = setBooks(books);

                dispatch(action);
            })
    }
}

export const deleteSerie = book => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert('Exclusão', `Deseja excluir a série ${book.title}?`,
                [
                    {
                        text: 'Não',
                        onPress: () => {
                            resolve(false);
                        },
                        style: 'cancel'
                    },
                    {
                        text: 'Sim',
                        onPress: async () => {
                            const { currentUser } = firebase.auth();

                            try {
                                await firebase.database().ref(`/users/${currentUser.uid}/books/${book.id}`).remove();

                                resolve(true);
                            }
                            catch (e) {
                                reject(e);
                            }
                        },
                    }
                ],
                { cancelable: false }
            )
        })
    }
}