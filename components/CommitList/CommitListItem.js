import React from 'react';
import { Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import CommitListItemStyles from './CommitListItem.styles';

export default function CommitListItem(props) {
    const name = props.item.commit.author.name;
    let avatar = require('../../assets/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png');
    try {
        avatar = { uri: props.item.author.avatar_url };
    } catch (error) {
        console.log('Avatar not found: ');
    }
    const date = new Date(props.item.commit.author.date);
    const message = props.item.commit.message;
    return (
        <TouchableOpacity
            style={CommitListItemStyles.container}
            onPress={() => props.commitClicked()}>
            <Image style={CommitListItemStyles.avatar} source={avatar} />
            <ScrollView>
                <Text style={CommitListItemStyles.itemTexts}>{name}</Text>
                <Text style={CommitListItemStyles.itemTexts}>{date.toLocaleString()}</Text>
                <Text style={CommitListItemStyles.itemTexts}>{message}</Text>
            </ScrollView>
        </TouchableOpacity>
    );
}
