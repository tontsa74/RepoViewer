import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import CommitListItemStyles from './CommitListItem.styles';

/**
 * Commit list item
 *
 * @param {*} props item
 */
export default function CommitListItem(props) {
    const name = props.item.commit.author.name;
    let avatar;
    try {
        avatar = { uri: props.item.author.avatar_url };
    } catch (error) {
        console.log('Avatar not found: ');
        avatar = require('../../assets/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png');
    }
    const date = new Date(props.item.commit.author.date).toLocaleString();
    const message = props.item.commit.message;

    return (
        <View style={CommitListItemStyles.container}>
            <Image style={CommitListItemStyles.avatar} source={avatar} />
            <ScrollView>
                <Text style={CommitListItemStyles.itemTexts}>{name}</Text>
                <Text style={CommitListItemStyles.itemTexts}>{date}</Text>
                <Text style={CommitListItemStyles.itemTexts}>{message}</Text>
            </ScrollView>
        </View>
    );
}
