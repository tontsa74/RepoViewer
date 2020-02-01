import { REQUEST_REPOS, REPOS_FULFILLED, REPOS_REJECTED } from '../types';

/**
 * Define your action create that set your loading state to true.
 *
 */
export const requestRepos = () => {
    return {
        type: REQUEST_REPOS,
        loading: true,
    };
};

/**
 * Define a action creator to return the data when the promise is resolved and set loading state to false
 *
 * @param {*} data response data
 */
export const reposFulfilled = data => {
    return {
        type: REPOS_FULFILLED,
        payload: data,
        loading: false,
    };
};

/**
 * Define a action creator that sets an error message and set loading state to false
 *
 * @param {*} error error message
 */
export const reposRejected = error => {
    return {
        type: REPOS_REJECTED,
        payload: error,
        loading: false,
    };
};

/**
 * Fetch and dispatch GitHub repositories
 *
 * @param {String} username GitHub username
 */
export const fetchRepos = username => {
    return async dispatch => {
        try {
            dispatch(requestRepos());
            const url = `https://api.github.com/users/${username}/repos?sort=updated`;
            const reposPromise = await fetch(url);
            const reposJson = await reposPromise.json();
            if (reposJson.message) {
                dispatch(reposRejected(reposJson.message));
            }
            dispatch(reposFulfilled(reposJson));
        } catch (error) {
            console.log('Fetch Repositories Error-----------------', error);
            dispatch(reposRejected(error.message));
        }
    };
};
