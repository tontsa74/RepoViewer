import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import commitStyles from './Commit.styles';
import BranchPicker from '../../components/branchPicker.js/BranchPicker';

export default function Commit() {
    return (
        <View style={[styles.container, commitStyles.container]}>
            <Text>Commit Screen</Text>
            <BranchPicker />
        </View>
    );
}
