import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {AddToDo} from '../components/AddToDo';
import {ToDo} from '../components/ToDo';

export const MainScreen = ({addToDos, toDos, removeToDo}) => {
return (
    <View>
    <AddToDo onSubmit = {addToDos}/>
    <FlatList
      keyExtractor = {(item) => item.id}
      data = {toDos}
      renderItem = {({item}) => <ToDo todo={item} onRemove = {removeToDo}/>}
    />
    </View>
)
}

const styles = StyleSheet.create({}) 