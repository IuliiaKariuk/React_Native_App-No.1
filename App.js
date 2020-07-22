//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';

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
  setToDos(prev => prev.filter(todo => todo.id != id))               
}

  return (
    <View>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    <MainScreen addToDos = {addToDos} toDos = {toDos} removeToDo = {removeToDo}/>
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