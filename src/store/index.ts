import { searchReducer } from './reducers'
import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    main: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk))
