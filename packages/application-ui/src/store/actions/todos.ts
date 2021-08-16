import { formDataPost, post } from "../../services/http-request"

export const GetTodos = (filter?: any) => async (dispatch: any) => {
  let loading = true
  dispatch({ type: "SET_TODOS" })
  const response = await post("todos", filter)
  dispatch({ type: "SET_TODOS", payload: response.data })
  loading = false
  return { loading: loading }
}

export const AddTodos = (payload: any) => async (dispatch: any) => {
  const formData = new FormData();
  Object.keys(payload).map((key, index) => {
    if (key === "attatchments") {
      if (payload[key])
        formData.append("file", payload[key].file);
    } else {
      formData.append(key, payload[key]);
    }
  });
  const response = await formDataPost("add-todo", formData);
  if (payload.id)
    dispatch({ type: "UPDATE_TODO", payload: response.data })
  else
    dispatch({ type: "ADD_TODO", payload: response.data })
  return { success: response.success }
}

export const UpdateTodos = (payload: any) => async (dispatch: any) => {
  const response = await post("add-todo", payload)
  dispatch({ type: "UPDATE_TODO", payload: response.data, actionType: "UPDATE" })
  return { success: response.success }
}
