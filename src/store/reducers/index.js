import { combineReducers } from 'redux'
import AuthReducer from './auth';
import TodosReducer from './todos'

const reducers = combineReducers({
  TodosReducer: TodosReducer,
  AuthReducer: AuthReducer
})

export default reducers;