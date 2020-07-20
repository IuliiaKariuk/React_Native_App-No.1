import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export const ToDo = ({todo}) => {
    return (
    <View style = {styles.dodo}>
        <Text>{todo.title}</Text>
    </View>
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