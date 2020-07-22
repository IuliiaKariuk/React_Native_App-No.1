import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddToDo = ({onSubmit}) => {

const [value, setValue] = useState('');

const pressHandler = () => {
    if(value) {
        onSubmit(value)
        setValue('')
    }else{
        Alert.alert('Invalid input')
    }
}
    return (
    <View style = {styles.wrapper}>
        <TextInput 
        style = {styles.input} 
        onChangeText = {setValue} 
        value = {value}
        placeholder = 'Typing...'
        autoCorrect = {false}
        autoCapitalize = 'characters'
        //keyboardType = 'email-address'
        />
        <Button title = "Add" onPress = {pressHandler}/>
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
        marginBottom: 10
    }
})