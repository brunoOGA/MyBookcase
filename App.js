import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './src/components/menu';
import Index from './src/view/index';
import Register from './src/view/register';
import Login from './src/view/login';
import BookDetail from './src/view/bookDetail';
import BookForm from './src/view/bookForm';
import NoteForm from './src/view/noteForm';
import firebase from 'firebase';

const Stack = createStackNavigator();

export default class App extends React.Component {


  componentDidMount() {
    var firebaseConfig = {
        apiKey: "AIzaSyAr_ms1gYMfDhuDH4qduVm_xCKZo21lmCY",
        authDomain: "mybookcase-c95c2.firebaseapp.com",
        projectId: "mybookcase-c95c2",
        storageBucket: "mybookcase-c95c2.appspot.com",
        messagingSenderId: "899091667765",
        appId: "1:899091667765:web:8f0c15a8e77a0edd7fca7c",
        measurementId: "G-YSQQPN0GGT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

  }


  render() {
    return (
      <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{animationEnabled: false}}>
          <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} animationEnabled/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }}/>
          <Stack.Screen name="BookForm" component={BookForm} options={{ headerShown: false }}/>
          <Stack.Screen name="NoteForm" component={NoteForm} options={{ headerShown: false }}/>
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}
