import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import commitStyles from './Commit.styles';
import BranchPicker from '../../components/BranchPicker/BranchPicker';
import CommitList from '../../components/CommitList/CommitList';

Commit.navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam('name') };
};

/**
 * Commit screen component
 *
 * Contains branch picker and commit list
 *
 */
export default function Commit() {
    return (
        <View style={[styles.container, commitStyles.container]}>
            <Text style={commitStyles.textTitle}>Select branch</Text>
            <BranchPicker />
            <CommitList />
        </View>
    );
}
