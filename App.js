//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {ToDoScreen} from './src/screens/ToDoScreen';

export default function App() {

  const [toDoID, setToDoId] = useState('1')

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
  const todo = toDos.find(t => t.id == id)
  Alert.alert(
    'Delete the element',
    `Are you sure to delete ${todo.title}?`,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed')
      },
      { text: 'OK', onPress: () => {
        setToDoId(null)
        setToDos(prev => prev.filter(todo => todo.id != id))    
      } }
    ],
    { cancelable: false }
  );           
}

let content = (<MainScreen addToDos = {addToDos} toDos = {toDos} removeToDo = {removeToDo} openToDo = {setToDoId}/>)

if (toDoID) {
  const selectedToDo = toDos.find(todo => todo.id === toDoID)                 //якщо серед масиву id елем співпадає з вибраним елем, то виводжу сам todo айтем
  content = <ToDoScreen goBack = {() => setToDoId(null)} todo = {selectedToDo} onRemove = {removeToDo}/>
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