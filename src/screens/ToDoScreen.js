import React, {useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {THEME} from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';

export const ToDoScreen = ({goBack, todo, onRemove, onSave}) => {

    const [modal, setModal] = useState(false)                   //початковий стан false - не показується

const SaveHandler = title => {                     //різниця в тайтлі
onSave(todo.id, title)
setModal(false)
}    

return(
    <View>
        <EditModal value = {todo.title} visible = {modal} onCancel = {()=> setModal(false)} onSave = {SaveHandler}/>
        <AppCard style = {styles.card}>
        <Text style = {styles.title}>{todo.title}</Text>
        <Button title = "Edit" onPress = {()=> setModal(true)}></Button>
        </AppCard>
   <View style = {styles.buttons}>
   <View style = {styles.button}><Button title = "Back" onPress = {goBack} color = {THEME.GRAY_COLOR}/></View>
   <View style = {styles.button}><Button title = "Remove" color = {THEME.DANGER_COLOR} onPress = {() => onRemove(todo.id) }/></View>
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