import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CommitListStyles from './CommitList.styles';
import { useSelector } from 'react-redux';
import CommitListItem from './CommitListItem';

export default function CommitList(props) {
    const commits = useSelector(state => state.commits);

    const commitClicked = commit => {
        console.log('commitClicked', commit.commit.message);
    };

    return (
        <View style={CommitListStyles.container}>
            {commits.commits.length > 0 && (
                <FlatList
                    data={commits.commits}
                    keyExtractor={item => item.sha}
                    ListHeaderComponent={
                        <Text style={CommitListStyles.listHeader}>Commits</Text>
                    }
                    renderItem={({ item }) => (
                        <CommitListItem
                            item={item}
                            commitClicked={() => commitClicked(item)}
                        />
                    )}
                />
            )}
        </View>
    );
}
