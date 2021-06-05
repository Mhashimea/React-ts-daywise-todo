import { post } from '../../services/http-request';

export const GetUsers = () => async (dispatch: any) => {
  dispatch({ type: "SET_PROFILE" })
  const response = await post("me")
  dispatch({ type: "SET_PROFILE", payload: response.data })
}