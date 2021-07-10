import { post } from "../../services/http-request"

export const GetTeams = () => async (dispatch: any) => {
  dispatch({ type: "SET_TEAMS" })
  const response = await post("teams")
  dispatch({ type: "SET_TEAMS", payload: response.data })
}

export const GetProjects = () => async (dispatch: any) => {
  dispatch({ type: "SET_PROJECTS" })
  const response = await post("projects")
  dispatch({ type: "SET_PROJECTS", payload: response.data })
}
