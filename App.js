//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {ToDoScreen} from './src/screens/ToDoScreen';

export default function App() {

  const [toDoID, setToDoId] = useState(null)

  const [toDos, setToDos] = useState([
    {id: '1', title : "Вивчити React"},
    {id: '2', title: "Написати апку"}
  ])
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
  setToDos(prev => prev.filter(todo => todo.id != id))               
}

let content = (<MainScreen addToDos = {addToDos} toDos = {toDos} removeToDo = {removeToDo} openToDo = {setToDoId}/>)

if (toDoID) {
  const selectedToDo = toDos.find(todo => todo.id === toDoID)                 //якщо сереед масиву id елем співпадає з вибраним елем, то виводжу сам todo айтем
  content = <ToDoScreen goBack = {() => setToDoId(null)} todo = {selectedToDo}/>
}
  return (
    <View>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    {content}
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