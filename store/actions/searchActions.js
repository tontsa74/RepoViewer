import { SET_USERNAME, SET_BRANCH, SET_COMMITS_URL } from '../types';

/**
 * Define a action creator that sets GitHub username
 *
 * @param {*} username username
 */
export const searchUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username,
    };
};

/**
 * Define a action creator that sets GitHub branch name
 *
 * @param {*} branch branch name
 */
export const searchBranch = branch => {
    return {
        type: SET_BRANCH,
        payload: branch,
    };
};

/**
 * Define a action creator that sets GitHub commits url
 *
 * @param {*} username commits url
 */
export const searchCommitsUrl = url => {
    return {
        type: SET_COMMITS_URL,
        payload: url,
    };
};
