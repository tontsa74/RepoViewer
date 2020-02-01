import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';
import homeStyles from './Home.styles';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import RepoList from '../../components/RepoList/RepoList';

Home.navigationOptions = {
    title: 'Repo Viewer',
};

/**
 * Home screen component
 *
 * Contains username text input and repository list
 *
 * @param {*} props navigation
 */
export default function Home(props) {
    return (
        <View style={[styles.container, homeStyles.container]}>
            <UsernameInput />
            <RepoList navigation={props.navigation} />
        </View>
    );
}
