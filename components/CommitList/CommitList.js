import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CommitListStyles from './CommitList.styles';
import { useSelector } from 'react-redux';
import CommitListItem from './CommitListItem';
import LoadingIndicator from '../Loading/LoadingIndicator';

/**
 * Commit list component
 *
 */
export default function CommitList() {
    const commits = useSelector(state => state.commits);

    return (
        <View style={CommitListStyles.container}>
            {commits.loading && <LoadingIndicator />}
            {!commits.loading && commits.commits.length > 0 && (
                <FlatList
                    data={commits.commits}
                    keyExtractor={item => item.sha}
                    ListHeaderComponent={
                        <Text style={CommitListStyles.listHeader}>Commits</Text>
                    }
                    renderItem={({ item }) => <CommitListItem item={item} />}
                />
            )}
        </View>
    );
}
