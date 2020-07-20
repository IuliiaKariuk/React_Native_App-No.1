//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
    <ScrollView>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    <AddToDo onSubmit = {addToDos}/>
    <View>
      {toDos.map((todo, index) => {
        return <ToDo todo = {todo} key={index}/>
      })}
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container : {
  paddingHorizontal: 20,
  paddingVertical: 30
}
});