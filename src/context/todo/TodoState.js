import React, { useReducer, useContext } from 'react';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import {ScreenContext} from '../screen/screenContext'

export const TodoState = ({children}) => {
    const initialState = {
        todos: [{id: '1', title : "Вивчити React"}]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)

    const addToDos = title => dispatch({type: ADD_TODO, title})
    const removeToDo = id => {
        changeScreen(null)
        dispatch({type: REMOVE_TODO, id})
    }
    const updateToDo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

    return (
    <TodoContext.Provider 
    value = 
    {{todos: state.todos,
        addToDos,
        removeToDo,
        updateToDo
    }}
    > 
    {children} 
    </TodoContext.Provider>
    )
}






