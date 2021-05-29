const initailState = {
  todos: [],
  currentTodo: {}
}

export const TodosReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state

  }
}

export default TodosReducer