import { REQUEST_COMMITS, COMMITS_FULFILLED, COMMITS_REJECTED } from '../types';

export const requestCommits = () => {
    return {
        type: REQUEST_COMMITS,
        loading: true,
    };
};

export const commitsFulfilled = data => {
    return {
        type: COMMITS_FULFILLED,
        payload: data,
        loading: false,
    };
};

export const commitsRejected = error => {
    return {
        type: COMMITS_REJECTED,
        payload: error,
        loading: false,
    };
};

export const fetchCommits = url => {
    return async dispatch => {
        try {
            // dispatch fetch loading status
            dispatch(requestCommits());
            const commitsPromise = await fetch(url);
            const commitsJson = await commitsPromise.json();
            dispatch(commitsFulfilled(commitsJson));
        } catch (error) {
            console.log('Fetch Commits Error-----------------', error);
            dispatch(commitsRejected(error));
        }
    };
};
