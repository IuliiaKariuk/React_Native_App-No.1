import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export const ToDoScreen = ({goBack, todo}) => {
return(
    <View>
        <Text>{todo.title}</Text>
   <View style = {styles.buttons}>
   <View style = {styles.button}><Button title = "Back" onPress = {goBack} color = "#757575"/></View>
   <View style = {styles.button}><Button title = "Remove" color = '#e53935' onPress = {() => console.log("Removal")}/></View>
   </View>
</View>
)
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
}) 