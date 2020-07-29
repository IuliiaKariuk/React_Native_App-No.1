//шаблон апки
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
    //const [toDos, setToDos] = useState([])
    //const [toDoID, setToDoId] = useState(null)

    // const addToDos = title => {
    //     setToDos(prev => [
    //       ...prev,
    //       {
    //         id: Date.now().toString(),
    //         title
    //       }
    //     ])
    //   }
    
    // const removeToDo = id => {
    //   const todo = toDos.find(t => t.id == id)
    //   Alert.alert(
    //     'Delete the element',
    //     `Are you sure to delete ${todo.title}?`,
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed')
    //       },
    //       { text: 'OK', onPress: () => {
    //         setToDoId(null)
    //         setToDos(prev => prev.filter(todo => todo.id != id))    
    //       } }
    //     ],
    //     { cancelable: false }
    //   );           
    // }
    
    // const updateToDo = (id, title) => {
    // setToDos(old => old.map(todo => {
    //   if(todo.id === id) {
    //     todo.title = title
    //   }
    //   return todo                                                       //повертаю так чи інакше туду елем, але якщо відредагований, то повертаю новий тайтл
    // }))
    // }
    
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