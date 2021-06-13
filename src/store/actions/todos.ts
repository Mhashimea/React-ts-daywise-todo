import { post } from '../../services/http-request'

export const GetTodos = () => async (dispatch: any) => {
  dispatch({ type: "SET_TODOS" })
  const response = await post('todos')
  dispatch({ type: 'SET_TODOS', payload: response.data })
}

export const AddTodos = (payload: Object) => async (dispatch: any) => {
  const response = await post("add-todo", payload)
  dispatch({ type: 'ADD_TODO', payload: response.data })
  return { success: response.success }
}

export const UpdateTodos = (payload: Object) => async (dispatch: any) => {
  const response = await post('add-todo', payload)
  dispatch({ type: 'UPDATE_TODO', payload: payload })
  return { success: response.success }
}