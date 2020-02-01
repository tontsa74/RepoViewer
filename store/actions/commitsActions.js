import { REQUEST_COMMITS, COMMITS_FULFILLED, COMMITS_REJECTED } from '../types';

/**
 * Define your action create that set your loading state to true.
 *
 */
export const requestCommits = () => {
    return {
        type: REQUEST_COMMITS,
        loading: true,
    };
};

/**
 * Define a action creator to return the data when the promise is resolved and set loading state to false
 *
 * @param {*} data response data
 */
export const commitsFulfilled = data => {
    return {
        type: COMMITS_FULFILLED,
        payload: data,
        loading: false,
    };
};

/**
 * Define a action creator that sets an error message and set loading state to false
 *
 * @param {*} error error message
 */
export const commitsRejected = error => {
    return {
        type: COMMITS_REJECTED,
        payload: error,
        loading: false,
    };
};

/**
 * Fetch and dispatch GitHub commits
 *
 * @param {String} url url
 */
export const fetchCommits = url => {
    return async dispatch => {
        try {
            dispatch(requestCommits());
            const commitsPromise = await fetch(url);
            const commitsJson = await commitsPromise.json();
            if (commitsJson.message) {
                dispatch(commitsRejected(commitsJson.message));
            }
            dispatch(commitsFulfilled(commitsJson));
        } catch (error) {
            console.log('Fetch Commits Error-----------------', error);
            dispatch(commitsRejected(error.message));
        }
    };
};
