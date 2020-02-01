import {
    REQUEST_BRANCHES,
    BRANCHES_FULFILLED,
    BRANCHES_REJECTED,
} from '../types';

/**
 * Define your action create that set your loading state to true.
 *
 */
export const requestBranches = () => {
    return {
        type: REQUEST_BRANCHES,
        loading: true,
    };
};

/**
 * Define a action creator to return the data when the promise is resolved and set loading state to false
 *
 * @param {*} data response data
 */
export const branchesFulfilled = data => {
    return {
        type: BRANCHES_FULFILLED,
        payload: data,
        loading: false,
    };
};

/**
 * Define a action creator that sets an error message and set loading state to false
 *
 * @param {*} error error message
 */
export const branchesRejected = error => {
    return {
        type: BRANCHES_REJECTED,
        payload: error,
        loading: false,
    };
};

/**
 * Fetch and dispatch GitHub branches
 *
 * @param {String} full_name full name <owner/repo> example: tontsa74/RepoViewer
 */
export const fetchBranches = full_name => {
    return async dispatch => {
        try {
            dispatch(requestBranches());
            const url = `https://api.github.com/repos/${full_name}/branches`;
            const branchesPromise = await fetch(url);
            const branchesJson = await branchesPromise.json();
            if (branchesJson.message) {
                dispatch(branchesRejected(branchesJson.message));
            }
            dispatch(branchesFulfilled(branchesJson));
        } catch (error) {
            console.log('Fetch Branches Error-----------------', error);
            dispatch(branchesRejected(error.message));
        }
    };
};
