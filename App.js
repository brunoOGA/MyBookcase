import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './src/components/menu';
import Index from './src/view/index';
import Register from './src/view/register';
import Login from './src/view/login';
import BookDetail from './src/view/bookDetail';
import BookForm from './src/view/bookForm';
import NoteForm from './src/view/noteForm';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
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
};

export default App;