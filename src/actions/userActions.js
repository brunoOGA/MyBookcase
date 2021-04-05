import firebase from 'firebase';

export const USER_LOGIN_SUCESSS = 'USER_LOGIN';
export const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESSS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
    type: USER_LOGOUT,
});

export const processLogin = ({ email, password }) => dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
        const action = userLoginSucess(user);
        dispatch(action);
    })
    .catch(error => {
        return Promise.reject(error);
    })

}

export const processLogout = () => dispatch => {
    const action = userLogout();
    dispatch(action);
}