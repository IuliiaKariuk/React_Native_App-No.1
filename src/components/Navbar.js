import React from 'react';
import {View, StyleSheet, Text} from 'react-native'


export const Navbar = ({title}) => {
return(
<View style = {styles.navbar}>
<Text style = {styles.text}>{title}</Text>
</View>
)
}


const styles = StyleSheet.create({
navbar: {
height: 70,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#3949ab'
},
text: {
color: 'white',
fontSize: 20
}
})