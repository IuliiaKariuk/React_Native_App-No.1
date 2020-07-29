import React, { useReducer } from 'react';
import {ScreenContext} from './screenContext';
import {screenReducer} from './screenReducer';
import {SCREEN_CHANGE} from '../types';

export const ScreenState = ({children}) => {
    const [state, dispatch] = useReducer(screenReducer, null)

    const changeScreen = id => dispatch({type: SCREEN_CHANGE, payload: id})

    return (
        <ScreenContext.Provider
        value = {{
            changeScreen,
            toDoID: state
        }}
        >
            {children}
        </ScreenContext.Provider>
    )
}