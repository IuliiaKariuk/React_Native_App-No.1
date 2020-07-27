import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../theme';


export const AppButton =({onPress, children, color = THEME.MAIN_COLOR}) => {
return(
    <TouchableOpacity onPress = {onPress}>
        <View style = {{...styles.button, backgroundColor: color}}>
<AppTextBold>{children}</AppTextBold>
        </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})