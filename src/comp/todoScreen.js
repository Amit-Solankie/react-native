import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {doc, getDoc, setDoc} from 'firebase/firestore';
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
import {todoList, deleteTodo} from '../store/todoSlice';
const COLORS = {primary: '#1f145c', white: '#fff'};

const TodoScreen = () => {
  const todo = useSelector(state => state.tr.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  //   useEffect(() => {
  //     const myDoc = doc(db, 'todo', '1');
  //     getDoc(myDoc).then(snapshot => {
  //       if (snapshot.exists) {
  //         alert('data read');
  //         console.log(snapshot.data());
  //         snapshot.data();
  //       } else {
  //         alert('document not found');
  //       }
  //     });
  //   });
  const createHandler = () => {
    // const myDoc = doc(db, 'todo', '1');

    // setDoc(myDoc)
    dispatch(todoList(input));
  };
  const deleteHandler = id => {
    dispatch(deleteTodo(id));
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
        keyExtractor={el => el}
        data={todo}
        renderItem={el => {
          return (
            <View style={styles.listItems}>
              <View style={{flex: 1}}>
                <Text style={styles.todoText}>{el.item}</Text>
                <TouchableOpacity onPress={() => deleteHandler(el.index)}>
                  <Text>❌</Text>
                </TouchableOpacity>
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
    // marginVertical: 10,
  },
  listItems: {
    marginVertical: 10,
    padding: 20,
    flexDirection: 'row',
    borderRadius: 15,
    elevation: 12,
    color: COLORS.primary,
  },
});

export default TodoScreen;
