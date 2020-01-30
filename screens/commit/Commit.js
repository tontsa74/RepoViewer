import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import commitStyles from './Commit.styles';
import BranchPicker from '../../components/branchPicker.js/BranchPicker';
import CommitList from '../../components/CommitList/CommitList';

Commit.navigationOptions = ({ navigation }) => {
    return {title: navigation.getParam('name'),};
};

export default function Commit() {
    return (
        <View style={[styles.container, commitStyles.container]}>
            <Text>Branch</Text>
            <BranchPicker />
            <CommitList />
        </View>
    );
}
