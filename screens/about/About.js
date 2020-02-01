import React from 'react';
import { Text, View, Linking, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles';
import aboutStyles from './About.styles';

/**
 * About screen component
 *
 * Contains app name, logo, description and github link
 *
 */
export default function About() {
    const title = 'RepoViewer';
    const description = `
RepoViewer is application to search GitHub repositories, branches and commits by username.

Project is created with:
* Expo SDK36
* Expo CLI 3.11.7
* NodeJS 12.14.1
`;
    const url = 'https://github.com/tontsa74/RepoViewer';
    const logo = '../../assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';

    return (
        <View style={[styles.container, aboutStyles.container]}>
            <Image style={aboutStyles.logo} source={require(logo)} />
            <Text style={aboutStyles.textTitle}>{title}</Text>
            <Text style={aboutStyles.textDescription}>{description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
                <Text style={aboutStyles.textLink}>{url}</Text>
            </TouchableOpacity>
        </View>
    );
}
