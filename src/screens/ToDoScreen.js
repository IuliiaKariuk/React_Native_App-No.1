import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export const ToDoScreen = ({goBack, todo}) => {
return(
    <View>
        <Text>{todo.title}</Text>
    <Button title = "Back" onPress = {goBack}/>
</View>
)
}

const styles = StyleSheet.create({}) 