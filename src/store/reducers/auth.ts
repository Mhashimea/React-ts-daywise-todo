const initialState = {
  currentUser: {},
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer