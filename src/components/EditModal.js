import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Modal, Alert} from 'react-native';
import { THEME } from '../theme';
import {AppButton} from './ui/AppButton'

export const EditModal = ({visible, onCancel, value, onSave}) => {     //visible - відпов. за появу/зникнення модал. вікна
    const [title, setValue] = useState(value)         
    
    const SaveHandler = () => {
        if (title.trim().length < 3){
            Alert.alert('Error', `Min number of characters must be 3. Currently you use ${title.trim().length}`)
        }else{
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setValue(value)
        onCancel()
    }

    return (
        <Modal visible = {visible} animationType = 'slide' transparent = {false}>
        <View style = {styles.wrap}>
            <TextInput value = {title} onChangeText = {setValue} style = {styles.input} placeholder = "Editing..." maxLength = {64}/>
            <View style = {styles.buttons}>
            <AppButton onPress = {SaveHandler}>Save</AppButton>
            <AppButton color = {THEME.DANGER_COLOR} onPress = {cancelHandler}>Cancel</AppButton>
            </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
        width: "100%",
        justifyContent: "space-around"
    }
})