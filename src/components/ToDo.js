import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppTextBold} from './ui/AppTextBold'


export const ToDo = ({todo, onRemove, onOpen}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    return (
        <TouchableOpacity 
        activeOpacity = {0.5}
        onPress = {() => onOpen(todo.id)}
        onLongPress = {longPressHandler}>
    <View style = {styles.dodo}>
        <AppTextBold>{todo.title}</AppTextBold>
    </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dodo: {
        padding:10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5
    }
})