import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddToDo = props => {
    return (
    <View style = {styles.wrapper}>
        <TextInput style = {styles.input}/>
        <Button title = "Add"/>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }
})