import React, {useState} from 'react';
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
  Modal,
  Pressable,
  Image,
  FlatList,
} from 'react-native';

import {Dialog} from 'react-native-elements';
import {useSelector} from 'react-redux';
const COLORS = {primary: '#1f145c', white: '#fff'};
const colors = {
  black: '#2D3426',
  blue: '#24A6D9',
  lightBlue: '#A7CBD9',
  white: '#FFFFFF',
};

const NoteScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const Notes = [
    {
      title: 'Finish project',
      subTitle: ['complete backend', 'complete frontend'],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
          <Text style={{padding: 8, color: colors.white, fontWeight: '700'}}>
            have to go gym
          </Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{alignSelf: 'center',marginRight: 4}}>
            <Image
              source={require('../resources/editing.png')}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center', marginRight: 4}}>
            <Image
              source={require('../resources/delete.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Modal */}
      <Modal
        // style={{width:'300',height:'200'}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="Add Your Notes"
              // onChangeText={onChangeText}
              // value={text}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.addNote}>
        <View style={styles.divider} />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.title}>
            Add
            <Text style={{fontWeight: '300', fontSize: 30, color: colors.blue}}>
              Notes
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.noteBtn}>
            <Text>➕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  addNote: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 24,
  },
  noteBtn: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.black,
    borderRadius: 8,
    padding: 8,
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 24,
    paddingHorizontal: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    width: '100%',
  },
  modalView: {
    justifyContent: 'space-between',
    width: '90%',
    height: 300,
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    // flex:1,
    justifyContent: 'flex-end',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 100,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  noteContainer: {
    backgroundColor: colors.blue,
    width: '90%',
    borderRadius: 6,
    margin: 14,
  },
});
export default NoteScreen;
