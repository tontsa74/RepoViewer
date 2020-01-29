import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';
import homeStyles from './Home.styles';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import RepoList from '../../components/RepoList/RepoList';

Home.navigationOptions = {
    title: 'GitHub Finder',
};

export default function Home(props) {
    return (
        <View style={[styles.container, homeStyles.container]}>
            <UsernameInput />
            <RepoList navigation={props.navigation} />
        </View>
    );
}
