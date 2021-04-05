import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './components/menu';
import Index from './view/index';
import Register from './view/register';
import Login from './view/login';
import BookDetail from './view/bookDetail';
import BookForm from './view/bookForm';
import NoteForm from './view/noteForm';
import firebase from 'firebase';

const Stack = createStackNavigator();

export default class Router extends React.Component {


  componentDidMount() {
    if (!firebase.apps.length) {
      var firebaseConfig = {
        apiKey: "AIzaSyAr_ms1gYMfDhuDH4qduVm_xCKZo21lmCY",
        authDomain: "mybookcase-c95c2.firebaseapp.com",
        projectId: "mybookcase-c95c2",
        storageBucket: "mybookcase-c95c2.appspot.com",
        messagingSenderId: "899091667765",
        appId: "1:899091667765:web:8f0c15a8e77a0edd7fca7c",
        measurementId: "G-YSQQPN0GGT",
        databaseURL: "https://mybookcase-c95c2-default-rtdb.firebaseio.com/"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }

  }


  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} animationEnabled />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            <Stack.Screen name="NoteForm" component={NoteForm} options={{ headerShown: false }} />
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="BookForm" component={BookForm} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
