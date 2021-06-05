const initialState = {
  currentUser: {},
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer