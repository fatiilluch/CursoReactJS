// Action types

import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit'

const ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
    DONE_TODO: 'DONE_TODO',
    SET_USERNAME: 'SET_USERNAME'
}

// Action creator

const addTodo = (descripcion) => {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: {
          id: Date.now(),
          description: descripcion
        }
        // si la propiedad se llamase igual que uno de los argumentos pasados, se pone solo el nombre del argumento
        // description
    }
}

const doneTodo = (id) => {
    return {
        type: ACTION_TYPES.DONE_TODO,
        payload: {
          id: id,
          comment: "hola"
        }
    }
}

const setUserName = (username) => {
    return {
        type: ACTION_TYPES.SET_USERNAME,
        payload: {
            username
        }
    }
}

// Reducers --> controla, una sola funcion, todos los cambios que hay --> dificil de mantener

const todos = (state = [], action) => {
    switch (action.type){
        case ACTION_TYPES.ADD_TODO:
            return state.concat([
                {
                    id: action.payload.id,
                    description: action.payload.description,
                    state: 'Pending',
                    commentState: ''
                }
            ])
        case ACTION_TYPES.DONE_TODO:
            const newState = state.map(todo => ({...todo}))
            const todo = newState.find(todo => todo.id === action.payload.id);
            todo.state = "DONE";
            todo.commentState = action.payload.comment;
            return newState;
    }
}

const user = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state

    }
}

/*
... abre el objeto en su propiedades. Separa las props. Como esta dentro de llaves,
    crea un nuevo objeto con las propiedades que trae
con state.map(blabla) clona el estado
*/

// store

const reducers = combineReducers({
    todos,
    user
})

// const store = configureStore(reducers({}))
const store = createStore(reducers)

store.subscribe(() => {
    console.log('Store', store.getState())
})

store.dispatch(addTodo("New task"))

store.dispatch(doneTodo(store.getState()[0].id, "Finished"))

store.dispatch(setUserName("Fati"))