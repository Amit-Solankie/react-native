import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Main = ({navigation}) => {
  return (
    <SafeAreaView>
      <Button title="Notes" onPress={() => navigation.navigate('Notes')} />
      <Button title="Todo" onPress={() => navigation.navigate('Todo')} />
    </SafeAreaView>
  );
};

export default Main;
