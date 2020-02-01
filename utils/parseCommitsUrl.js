/**
 * Parse commits url
 *
 * @param {*} commitsUrl general commits url
 * @param {*} branch branch name
 * @param {*} page page number
 * @returns {String} commits url
 */
export const parseCommitsurl = (commitsUrl, branch, page) => {
    return String(commitsUrl).replace(
        '{/sha}',
        `?sha=${branch}&per_page=10&page=${page}`
    );
};
