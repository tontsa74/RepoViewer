import { SET_USERNAME, SET_BRANCH, SET_COMMITS_URL, PARSE_COMMITS_URL } from "../types"

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

export const searchCommitsUrl = (url) => {
  return {
    type: SET_COMMITS_URL,
    payload: url,
  }
}
