import { SET_USERNAME } from "../types"

export const searchUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  }
}