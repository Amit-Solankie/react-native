import React from 'react';

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

const CreateNote = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: '100%'}}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Note Title"
          onChangeText={val => setInput(val)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
});

export default CreateNote;
