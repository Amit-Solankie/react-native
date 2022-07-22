import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {doc, getDoc, setDoc} from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {db} from '../../firebaseConfig';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {todoList, deleteTodo, addTodo} from '../store/todoSlice';
const COLORS = {primary: '#1f145c', white: '#fff'};

const TodoScreen = () => {
  const todo = useSelector(state => state.tr.todo);
  let arr = [...todo];
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    try {
      firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
          //  console.log('Total users: ', querySnapshot._data);

          querySnapshot.forEach(documentSnapshot => {
            let data = {
              title: documentSnapshot._data.title,
              id: documentSnapshot.id,
            };

            arr.push(data);
            
          });
          console.log('doc', arr);
          // arr.filter((el,idx) => el.id !== documentSnapshot.id);
          dispatch(todoList(arr));
        });
    } catch (error) {
      console.log(error);
    }
  }, [refresh]);

  const createHandler = async () => {
    let payload = {title: input};
    await firestore()
      .collection('Users')
      .add(payload)
      .then(() => {
        console.log('User added!');
      });
    dispatch(addTodo([payload]));
    // window.location.reload();
    setRefresh(Math.random() * 100);
  };
  const deleteHandler = id => {
    // console.log('id',id)
    firestore()
      .collection('Users')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
    // dispatch(deleteTodo(id));
    setRefresh(Math.random() * 100);
  };

  //   const todo = useSelector(state => state.tr);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>
          Todo List
        </Text>
      </View>
      <FlatList
        keyExtractor={el => el.id}
        data={todo}
        renderItem={({item}) => {
          return (
            <View style={styles.listItems}>
              <View style={{display: 'flex', justifyContent: 'flex-end'}}>
                <View style={styles.innerInput}>
                  <Text style={styles.todoText}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => deleteHandler(item.id)}>
                    <Text>❌</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            onChangeText={val => setInput(val)}
          />
        </View>
        <TouchableOpacity onPress={() => createHandler()}>
          <View style={styles.addContainer}>
            <Icon name="add" color={COLORS.white} size={30} />
          </View>
        </TouchableOpacity>
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
  container: {
    // flexDirection: 'column',
    height: 500,
    display: 'flex',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  button: {
    // justifyContent:'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    //width: 150,
    height: 30,
    backgroundColor: 'steelblue',
    borderRadius: 5,
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    elevation: 40,
    height: 50,
    backgroundColor: COLORS.white,
    marginRight: 20,
    borderRadius: 30,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  innerInput: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  deleteBtn: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addContainer: {
    elevation: 40,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  todoText: {
    marginVertical: 2,
  },
  listItems: {
    marginVertical: 1,
    padding: 20,
    // flexDirection: 'row',
    borderRadius: 5,
    elevation: 10,
    color: COLORS.primary,
  },
});

export default TodoScreen;
