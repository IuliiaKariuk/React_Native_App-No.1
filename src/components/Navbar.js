import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../theme';
import {AppText} from './ui/AppText';


export const Navbar = ({title}) => {
return(
<View style = {{...styles.navbar, ...Platform.select(
    {
    ios: styles.navbariOS,
    android: styles.navbarAnd
    }
)}}>
<AppText style = {styles.text}>{title}</AppText>
</View>
)
}


const styles = StyleSheet.create({
navbar: {
height: 70,
alignItems: 'center',
justifyContent: 'center'
},
text: {
color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
fontSize: 20
},
navbarAnd: {
backgroundColor: THEME.MAIN_COLOR
},
navbariOS: {
borderBottomColor: THEME.MAIN_COLOR,
borderBottomWidth: 1 
}
})