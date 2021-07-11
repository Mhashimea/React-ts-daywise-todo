import io from "socket.io-client"
import { post } from "../../services/http-request"

const socket = io("http://localhost:8080", {
  forceNew: true,
  transports: ["websocket"],
})

export const GetTodos = () => async (dispatch: any) => {
  dispatch({ type: "SET_TODOS" })
  const response = await post("todos")
  dispatch({ type: "SET_TODOS", payload: response.data })
}

export const AddTodos = (payload: any) => async (dispatch: any) => {
  const response = await post("add-todo", payload)
  dispatch({ type: "ADD_TODO", payload: response.data })
  return { success: response.success }
}

export const UpdateTodos = (payload: any) => async (dispatch: any) => {
  const response = await post("add-todo", payload)
  dispatch({ type: "UPDATE_TODO", payload: payload })
  socket.emit("todo:update", payload)
  return { success: response.success }
}
