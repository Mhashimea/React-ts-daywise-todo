import { combineReducers } from 'redux'
import AuthReducer from './auth';
import { CommonReducers } from './common';
import TodosReducer from './todos'

const reducers = combineReducers({
  TodosReducer: TodosReducer,
  CommonReducer: CommonReducers,
  AuthReducer: AuthReducer
})

export default reducers;