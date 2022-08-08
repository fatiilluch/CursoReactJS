import {combineReducers, createStore} from "redux";
import {books} from '../reducers/books'

const reducers = combineReducers({
    books
})

export const store = createStore(reducers)