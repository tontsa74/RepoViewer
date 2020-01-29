import React from 'react';
import { View, FlatList, Text } from 'react-native';
import RepoListStyles from './RepoList.styles';
import { useSelector } from 'react-redux';
import RepoListItem from './RepoListItem';

export default function RepoList(props) {
    const repos = useSelector(state => state.repos);

    const repoClicked = repo => {
        console.log('repoClicked', repo.name);
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
