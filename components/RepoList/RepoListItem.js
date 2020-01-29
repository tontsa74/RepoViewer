import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import RepoListItemStyles from './RepoListItem.styles';

export default function RepoListItem(props) {
    return (
        <TouchableOpacity
            style={RepoListItemStyles.container}
            onPress={() => props.repoClicked()}>
            <Text>{props.item.name}</Text>
        </TouchableOpacity>
    );
}
