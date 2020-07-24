//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {ToDoScreen} from './src/screens/ToDoScreen';


async function loadFonts() {
await Font.loadAsync({
'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
})
}

export default function App() {

  const [isReady, setIsReady] = useState(false)  //коли прогрузяться шрифти, апка промалюється. поч. флаг фолс

  const [toDoID, setToDoId] = useState(null)

  const [toDos, setToDos] = useState([
    {id: '1', title : "Вивчити React"}
  ])

  if(!isReady) {              //якщо флаг isReady фолс - зупиняє виконання функції
    return <AppLoading startAsync = {loadFonts} onError = {err => console.log(err)} onFinish = {() => setIsReady(true)}/>        //onFinish = {() => setIsReady(true)} обовязковий параметр
  }

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

const updateToDo = (id, title) => {
setToDos(old => old.map(todo => {
  if(todo.id === id) {
    todo.title = title
  }
  return todo                                                       //повертаю так чи інакше туду елем, але якщо відредагований, то повертаю новий тайтл
}))
}

let content = (<MainScreen addToDos = {addToDos} toDos = {toDos} removeToDo = {removeToDo} openToDo = {setToDoId}/>)

if (toDoID) {
  const selectedToDo = toDos.find(todo => todo.id === toDoID)                 //якщо серед масиву id елем співпадає з вибраним елем, то виводжу сам todo айтем
  content = <ToDoScreen goBack = {() => setToDoId(null)} todo = {selectedToDo} onRemove = {removeToDo} onSave = {updateToDo}/>
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