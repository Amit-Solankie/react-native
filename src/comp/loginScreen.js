import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {userLogin} from './store/loginSlice';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({navigation}) => {
  const arr = []
  const login = useSelector(state => state.lr);
  const func = async () => {
    // await firestore()
    //   .collection('Users')
    //   .get()
    //   .then(querySnapshot => {
    //     // console.log('Total users: ', querySnapshot.data);

    //     querySnapshot.forEach(documentSnapshot => {
    //       arr.push(documentSnapshot.data())
          
    //       console.log('list',documentSnapshot.data());
    //     });
    //   });
    //console.log('UsersInfo', usersCollection._docs);
    navigation.navigate('Main');
  };

  return (
    <View>
      <TextInput placeholder="Email id" />
      <TextInput placeholder="Password" />
      <Button title="Sign in" onPress={() => func()} />
    </View>
  );
};

export default LoginScreen;
