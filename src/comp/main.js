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
const colors = {
  black: '#2D3426',
  blue: '#24A6D9',
  lightBlue: '#A7CBD9',
  white: '#FFFFFF',
};

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.divider} />

        <Text style={styles.title}>
          Todo
          <Text style={{fontWeight: '300', color: colors.blue}}>List </Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{marginVertical: 8}}>
        <TouchableOpacity style={styles.addTodo}
        onPress={()=>navigation.navigate('Todo')}>
          <Text style={{fontWeight: '800'}}>➕</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.move}>Move to Todo</Text>
      {/* Notes */}
      {/* <View style={styles.divider} /> */}
      
      <View style={{flexDirection: 'row'}}>
        <View style={styles.divider} />

        <Text style={styles.title}>
          Note
          <Text style={{fontWeight: '300', color: colors.blue}}>List </Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{marginVertical: 24}}>
        <TouchableOpacity 
         onPress={()=>navigation.navigate('Notes')} style={styles.addTodo}>
          <Text style={{fontWeight: '800'}}>➕</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.move}>Move to Notes</Text>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent:'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    color: colors.black,
    // fontWeight: '800',
    fontSize: 38,
    paddingHorizontal: 34,
  },
  addTodo: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.black,
    borderRadius: 8,
    padding: 8,
  },
  move:{
    fontSize:14,
    fontWeight:'600',
    color:colors.blue,
    marginBottom: 54
  }
});

export default Main;
