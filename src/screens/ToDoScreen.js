import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {THEME} from '../theme';
import { AppCard } from '../components/ui/AppCard';

export const ToDoScreen = ({goBack, todo}) => {
return(
    <View>
        <AppCard style = {styles.card}>
        <Text style = {styles.title}>{todo.title}</Text>
        <Button title = "Edit"></Button>
        </AppCard>
   <View style = {styles.buttons}>
   <View style = {styles.button}><Button title = "Back" onPress = {goBack} color = {THEME.GRAY_COLOR}/></View>
   <View style = {styles.button}><Button title = "Remove" color = {THEME.DANGER_COLOR} onPress = {() => console.log("Removal")}/></View>
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
    },
    title: {
        fontSize: 20
    },
    card: {
      marginBottom: 20,
      padding: 15
    }
}) 