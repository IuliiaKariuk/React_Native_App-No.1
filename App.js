//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/Navbar'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style = {styles.text}>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#FF7F50',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   text: {
//     fontSize: 25,
//     color: '#DC143C',
//     textAlign: 'center'
//   }
// });


export default function App() {
  return (
    <View style = {styles.container}>
    <Navbar title = "To Do App"/>
    </View>
  );
}

const styles = StyleSheet.create({
container : {}
});