export const parseCommitsurl = (commitsUrl, branch, page) => {
    return String(commitsUrl).replace(
        '{/sha}',
        `?sha=${branch}&per_page=10&page=${page}`
    );
};
