import {
    REQUEST_BRANCHES,
    BRANCHES_FULFILLED,
    BRANCHES_REJECTED,
} from '../types';

export const requestBranches = () => {
    return {
        type: REQUEST_BRANCHES,
        loading: true,
    };
};

export const branchesFulfilled = data => {
    return {
        type: BRANCHES_FULFILLED,
        payload: data,
        loading: false,
    };
};

export const branchesRejected = error => {
    return {
        type: BRANCHES_REJECTED,
        payload: error,
        loading: false,
    };
};

export const fetchBranches = full_name => {
    return async dispatch => {
        try {
            // dispatch fetch loading status
            dispatch(requestBranches());
            const url = `https://api.github.com/repos/${full_name}/branches`;
            const branchesPromise = await fetch(url);
            const branchesJson = await branchesPromise.json();
            if (branchesJson.message) {
                dispatch(reposRejected(branchesJson.message));
            }
            dispatch(branchesFulfilled(branchesJson));
        } catch (error) {
            console.log('Fetch Branches Error-----------------', error);
            dispatch(branchesRejected(error.message));
        }
    };
};
