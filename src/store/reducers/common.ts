const initialState = {
  teams: [],
  projects: []
}

export const CommonReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      };
    case 'SET_PROJECTS':
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}