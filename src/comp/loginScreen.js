import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {userLogin} from './store/loginSlice';

const LoginScreen = ({navigation}) => {
  const login = useSelector(state => state.lr);

  return (
    <View>
      <TextInput placeholder="Email id" />
      <TextInput placeholder="Password" />
      <Button title="Sign in" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default LoginScreen;
