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
import {Dialog} from 'react-native-elements';
import {useSelector} from 'react-redux';
const COLORS = {primary: '#1f145c', white: '#fff'};

const NoteScreen = ({navigation}) => {
  const Notes = [
    {
      title: 'Finish project',
      subTitle: ['complete backend', 'complete frontend'],
    },
  ];
  return (
    // <View style={styles.container}>
    //   <TextInput mode="outlined" placeholder="Add Notes" style={styles.input} />
    //   <TouchableOpacity style={styles.button}>
    //     <Text style={{color: 'white'}}>Add New Note</Text>
    //   </TouchableOpacity>
    // </View>
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>
          Notes
        </Text>
      </View>
      <FlatList
        data={Notes}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <FlatList
                data={item.subTitle}
                renderItem={({item}) => {
                  return <Text>{item}</Text>;
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <Button
          title="Add Notes"
          onPress={() => navigation.navigate('Notes', { screen: 'AddNote' })}
        />
      </View>

      <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Add Notes</Dialog.Title>
        <Dialog.Description>
         Add Title and SUbtitle :
        </Dialog.Description>
        <Dialog.Input></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    paddingHorizontal: 20,
    color: COLORS.white,
  },
  // container: {
  //   // flexDirection: 'column',
  //   height: 550,
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   // alignItems: 'center',
  // },
  // button: {
  //   // justifyContent:'flex-end',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   //width: 150,
  //   height: 30,
  //   backgroundColor: 'steelblue',
  //   borderRadius: 5,
  // },
  // input: {
  //   margin: 2,
  //   borderColor: 'black',
  // },
});
export default NoteScreen;
