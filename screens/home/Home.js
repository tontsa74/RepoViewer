import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import homeStyles from './Home.styles';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Commit')}>
                <Text>to Commits screen</Text>
            </TouchableOpacity>
        </View>
    );
}
