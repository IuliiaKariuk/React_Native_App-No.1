import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export const ToDo = ({todo, onRemove}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    return (
        <TouchableOpacity 
        activeOpacity = {0.5}
        onPress = {() => console.log("Pressed", todo.id)}
        onLongPress = {longPressHandler}>
    <View style = {styles.dodo}>
        <Text>{todo.title}</Text>
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