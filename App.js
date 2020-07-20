//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddToDo} from './src/AddToDo'

export default function App() {
  return (
    <View>
    <Navbar title = "To Do App"/>
    <View style = {styles.container}>
    <AddToDo/>
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