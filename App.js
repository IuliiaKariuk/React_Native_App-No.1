//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddToDo} from './src/AddToDo'
import { ToDo } from './src/ToDo';

export default function App() {
  const [toDos, setToDos] = useState([])
  const addToDos = title => {
    setToDos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

const removeToDo = id => {
  setToDos(prev => prev.filter(todo => todo.id != id))               //якщо todo id не рівне id
}

  return (
    <View>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    <AddToDo onSubmit = {addToDos}/>
    <FlatList
      keyExtractor = {(item) => item.id}
      data = {toDos}
      renderItem = {({item}) => <ToDo todo={item} onRemove = {removeToDo}/>}
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
container : {
  paddingHorizontal: 20,
  paddingVertical: 30
}
});