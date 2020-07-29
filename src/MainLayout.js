import React, {useState, useContext} from 'react';
import { StyleSheet, View} from 'react-native';
import {Navbar} from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import {ToDoScreen} from './screens/ToDoScreen';
import { THEME } from './theme';
import { TodoContext } from './context/todo/todoContext';
import {ScreenContext} from './context/screen/screenContext'

export const MainLayout = () => {
    const {addToDos, removeToDo, updateToDo, todos} = useContext(TodoContext)
    const {toDoID, changeScreen} = useContext(ScreenContext)
  
    let content = (<MainScreen addToDos = {addToDos} todos = {todos} removeToDo = {removeToDo} openToDo = {changeScreen}/>)
    
    if (toDoID) {
      const selectedToDo = todos.find(todo => todo.id === toDoID)                 //якщо серед масиву id елем співпадає з вибраним елем, то виводжу сам todo айтем
      content = <ToDoScreen goBack = {() => changeScreen(null)} todo = {selectedToDo} onRemove = {removeToDo} onSave = {updateToDo}/>
    }
    return (
<View>
<Navbar title = "To Do App"/>
<View style = {styles.container}>
{content}
</View>
</View>
    )
}

const styles = StyleSheet.create({
    container : {
      paddingVertical: 30,
      paddingHorizontal: THEME.PADDING_HORIZONTAL
    }
    });