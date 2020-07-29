//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { TodoState } from './src/context/todo/TodoState';
import { MainLayout } from './src/MainLayout';
import {ScreenState} from './src/context/screen/ScreenState'


async function loadFonts() {
await Font.loadAsync({
'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
})
}

export default function App() {
  const [isReady, setIsReady] = useState(false)  //коли прогрузяться шрифти, апка промалюється. поч. флаг фолс


  if(!isReady) {              //якщо флаг isReady фолс - зупиняє виконання функції
    return <AppLoading startAsync = {loadFonts} onError = {err => console.log(err)} onFinish = {() => setIsReady(true)}/>       //onFinish = {() => setIsReady(true)} обовязковий параметр
  }

  
  return (
    <ScreenState>
    <TodoState>
    <MainLayout />
    </TodoState>
    </ScreenState>
  )
}
