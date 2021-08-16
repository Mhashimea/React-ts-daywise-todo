const initailState = {
  todos: [] as any,
  selectedTodo: {},
}

export const TodosReducer = (
  state = initailState,
  action: { type: any; payload: any, actionType: string },
) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      }
    case 'ADD_TODO':
      state.todos = [...state.todos, action.payload]
      return {
        ...state,
        todos: state.todos,
      }
    case 'UPDATE_TODO': {
      const todosArray = [...state.todos]
      if (action.actionType === "UPDATE") {
        const index = todosArray.findIndex(a => a.id === action.payload.id)
        if (index !== -1) todosArray[index] = action.payload
        console.log(todosArray)
      } else {
        todosArray.filter(a => a.id === action.payload.id)
      }

      return {
        ...state,
        todos: todosArray,
      }
    }
    default:
      return state
  }
}

export default TodosReducer;
