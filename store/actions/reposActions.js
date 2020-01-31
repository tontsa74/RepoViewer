import { REQUEST_REPOS, REPOS_FULFILLED, REPOS_REJECTED } from '../types';

export const requestRepos = () => {
    return {
        type: REQUEST_REPOS,
        loading: true,
    };
};

export const reposFulfilled = data => {
    return {
        type: REPOS_FULFILLED,
        payload: data,
        loading: false,
    };
};

export const reposRejected = error => {
    return {
        type: REPOS_REJECTED,
        payload: error,
        loading: false,
    };
};

export const fetchRepos = username => {
    return async dispatch => {
        try {
            // dispatch fetch loading status
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
