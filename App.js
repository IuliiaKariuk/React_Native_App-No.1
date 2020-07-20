//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddToDo} from './src/AddToDo'
import { ToDo } from './src/ToDo';

export default function App() {
  const [toDos, setToDos] = useState([])
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
    <View>
      {toDos.map((todo, index) => {
        return <ToDo todo = {todo} key={index}/>
      })}
    </View>
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