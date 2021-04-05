import firebase from "firebase";
import { Alert } from "react-native";
export const SET_ANNOTATIONS = 'SET_ANNOTATIONS';

const setAnnotations = annotations => ({
    type: SET_ANNOTATIONS,
    annotations: annotations
})

export const watchAnnotations = book => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/books/${book.id}/annotations`)
            .on('value', snapshot => {
                const annotations = snapshot.val();
                const action = setAnnotations(annotations);

                dispatch(action);
            })
    }
}

export const deleteAnnotation = (book, annotation) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert('Exclusão', `Deseja excluir a série ${annotation.title}?`,
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
                                await firebase.database().ref(`/users/${currentUser.uid}/books/${book.id}/annotations/${annotation.id}`).remove();

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