const initialState = {
  teams: [],
  projects: [],
  priority: ["High", "Medium", "Low"],
  pageTitle: "Dashboard"
}

export const CommonReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_TEAMS":
      return {
        ...state,
        teams: action.payload,
      }
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      }
    case "SET_PAGE_TITLE":
      return {
        ...state,
        pageTitle: action.title,
      }
    default:
      return state
  }
}
