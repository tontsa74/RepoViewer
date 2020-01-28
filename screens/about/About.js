import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import aboutStyles from './About.styles';

export default function About() {
    return (
        <View style={[styles.container, aboutStyles.container]}>
            <Text>About Screen</Text>
        </View>
    );
}
