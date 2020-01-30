import React from 'react';
import { View, FlatList, Text } from 'react-native';
import RepoListStyles from './RepoList.styles';
import { useSelector, useDispatch } from 'react-redux';
import RepoListItem from './RepoListItem';
import { fetchBranches } from '../../store/actions/branchesActions';
import { searchBranch } from '../../store/actions/searchActions';

export default function RepoList(props) {
    const repos = useSelector(state => state.repos);

    const dispatch = useDispatch();

    const repoClicked = repo => {
        console.log('repoClicked', repo.full_name);
        dispatch(fetchBranches(repo.full_name));
        dispatch(searchBranch(repo.default_branch))
        props.navigation.navigate('Commit');
    };

    return (
        <View style={RepoListStyles.container}>
            {repos.repos.length > 0 && (
                <FlatList
                    data={repos.repos}
                    keyExtractor={item => item.full_name}
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
