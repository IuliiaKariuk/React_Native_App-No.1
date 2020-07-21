//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddToDo} from './src/AddToDo'
import { ToDo } from './src/ToDo';

export default function App() {
  const [toDos, setToDos] = useState([
    {id:1, title:'test'},
    {id:2, title:'test'},
    {id:3, title:'test'},
    {id:4, title:'test'},
    {id:5, title:'test'}
  ])
  const addToDos = title => {
    setToDos(prev => [
      ...prev,
      {
        id: Date.now().toString,
        title
      }
    ])
  }
  return (
    <View>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    <AddToDo onSubmit = {addToDos}/>
    <FlatList
      keyExtractor = {(item, index) => index.toString()}
      data = {toDos}
      renderItem = {({item}) => <ToDo todo={item} />}
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