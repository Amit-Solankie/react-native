import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/comp/loginScreen';
import NoteScreen from './src/comp/noteScreen';
import Main from './src/comp/main';
import TodoScreen from './src/comp/todoScreen';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import loginReducer from './src/store/loginSlice';
import todoReducer from './src/store/todoSlice';
import CreateNote from './src/comp/createNote';
const store = configureStore({
  reducer: {
    lr: loginReducer,
    tr: todoReducer,
  },
});
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{height: '100%'}}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Notes" component={NoteScreen} />
            <Stack.Screen name="AddNote" component={CreateNote} />
            <Stack.Screen name="Todo" component={TodoScreen} />
          </Stack.Navigator>
          {/* <LoginScreen /> */}
          {/* <NoteScreen /> */}
          {/* <TodoScreen/> */}
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;
