import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {THEME} from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import {AppText} from '../components/ui/AppText';
import {AppButton} from '../components/ui/AppButton';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

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
        <AppText style = {styles.title}>{todo.title}</AppText>
        <AppButton onPress = {()=> setModal(true)}><FontAwesome name="edit" size={24} color="black" /></AppButton>
        </AppCard>
   <View style = {styles.buttons}>
   <View style = {styles.button}><AppButton onPress = {goBack} color = {THEME.GRAY_COLOR}><AntDesign name = 'back' size = {20}/></AppButton></View>
   <View style = {styles.button}><AppButton color = {THEME.DANGER_COLOR} onPress = {() => onRemove(todo.id) }><FontAwesome name = 'remove' size = {20}/></AppButton></View>
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
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    },
    card: {
      marginBottom: 20,
      padding: 15
    }
}) 