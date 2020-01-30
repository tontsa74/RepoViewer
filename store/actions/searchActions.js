import { SET_USERNAME, SET_BRANCH } from "../types"

export const searchUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  }
}
export const searchBranch = (branch) => {
  return {
    type: SET_BRANCH,
    payload: branch,
  }
}