import { combineReducers } from 'redux'
import TodosReducer from './todos'

const reducers = combineReducers({
  TodosReducer: TodosReducer
})

export default reducers;