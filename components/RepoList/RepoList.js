import React from 'react';
import { View, FlatList, Text } from 'react-native';
import RepoListStyles from './RepoList.styles';
import { useSelector, useDispatch } from 'react-redux';
import RepoListItem from './RepoListItem';
import { fetchBranches } from '../../store/actions/branchesActions';
import { searchBranch, searchCommitsUrl } from '../../store/actions/searchActions';
import { fetchCommits } from '../../store/actions/commitsActions';
import { parseCommitsurl } from '../../utils/parseCommitsUrl';

/**
 * Repository(repo) list component
 *
 * Provides list component to select repo
 * Dispatches selected repo branches and default branch commits to redux store
 *
 * @param {*} props navigation
 */
export default function RepoList(props) {
    const repos = useSelector(state => state.repos);

    const dispatch = useDispatch();

    /**
     * Dispatch repo branches
     * Dispatch general commits url
     * Dispatch repo default branch
     * Dispatch default branch commits
     * Navigate to commit screen
     *
     * @param {*} repo repo object
     */
    const repoClicked = repo => {
        dispatch(fetchBranches(repo.full_name));
        dispatch(searchCommitsUrl(repo.commits_url));
        dispatch(searchBranch(repo.default_branch));
        const url = parseCommitsurl(repo.commits_url, repo.default_branch, 1);
        dispatch(fetchCommits(url));
        props.navigation.navigate('Commit', { name: repo.name });
    };

    return (
        <View style={RepoListStyles.container}>
            {repos.repos.length > 0 && (
                <FlatList
                    data={repos.repos}
                    keyExtractor={repo => repo.full_name}
                    ListHeaderComponent={
                        <Text style={RepoListStyles.listHeader}>
                            Repositories of {repos.repos[0].owner.login}
                        </Text>
                    }
                    renderItem={({ item }) => (
                        <RepoListItem
                            item={item}
                            repoClicked={() => repoClicked(item)}
                        />
                    )}
                />
            )}
        </View>
    );
}
