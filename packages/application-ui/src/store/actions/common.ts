import { post } from "../../services/http-request"

export const GetTeams = () => async (dispatch: any) => {
  dispatch({ type: "SET_TEAMS" })
  const response = await post("teams", { active: null })
  dispatch({ type: "SET_TEAMS", payload: response.data })
}

export const GetProjects = () => async (dispatch: any) => {
  dispatch({ type: "SET_PROJECTS" })
  const response = await post("projects")
  dispatch({ type: "SET_PROJECTS", payload: response.data })
}

export const SetPageTitle = (title: string) => (dispatch: any) => {
  dispatch({ type: 'SET_PAGE_TITLE', title })
}
