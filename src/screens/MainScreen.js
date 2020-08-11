import React, { useEffect, useCallback } from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {AddToDo} from '../components/AddToDo';
import {ToDo} from '../components/ToDo';

export const MainScreen = ({addToDos, todos, removeToDo, openToDo, loading, error, fetchToDos}) => {
    let content = (<FlatList
    keyExtractor = {(item) => item.id}
    data = {todos}
    renderItem = {({item}) => <ToDo todo={item} onRemove = {removeToDo} onOpen = {openToDo}/>}
  />)
        const loadToDos = useCallback(async() => await fetchToDos, [fetchToDos])
useEffect(() => {
    loadToDos()
}, [])

  if(todos.length === 0) {
      content = <View style = {styles.imgWrap}>
          <Image style = {styles.image} source = {require('../../assets/no-items.png')}/>
      </View>
  }
    return (
    <View>
    <AddToDo onSubmit = {addToDos}/>     
    {content}                                     
    </View>
)
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
}) 