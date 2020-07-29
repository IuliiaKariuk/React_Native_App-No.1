import {SCREEN_CHANGE} from '../types'

const handlers = {
    [SCREEN_CHANGE]: (state, payload) => payload,
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}