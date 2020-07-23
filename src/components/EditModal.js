import React from 'react';
import {StyleSheet, Button, View, TextInput, Modal} from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({visible, onCancel}) => {              //visible - відпов. за появу/зникнення модал. вікна
    return (
        <Modal visible = {visible} animationType = 'slide' transparent = {false}>
        <View style = {styles.wrap}>
            <TextInput style = {styles.input} placeholder = "Editing..." maxLength = {64}/>
            <View style = {styles.buttons}>
            <Button title = "Save"/>
            <Button title = "Cancel" color = {THEME.DANGER_COLOR} onPress = {onCancel}/>
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