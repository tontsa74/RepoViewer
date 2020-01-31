import React from 'react';
import { View, Text } from 'react-native';
import errorMessageStyles from './ErrorMessage.styles';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { reposRejected } from '../../store/actions/reposActions';
import { branchesRejected } from '../../store/actions/branchesActions';
import { commitsRejected } from '../../store/actions/commitsActions';

export default function ErrorMessage() {
    const repos = useSelector(state => state.repos);
    const branches = useSelector(state => state.branches);
    const commits = useSelector(state => state.commits);

    const dispatch = useDispatch();

    const reposErrorClicked = () => {
        console.log('errorClicked: ', repos.errorMessage);
        dispatch(reposRejected(''));
    };

    const branchesErrorClicked = () => {
        console.log('errorClicked: ', branches.errorMessage);
        dispatch(branchesRejected(''));
    };

    const commitsErrorClicked = () => {
        console.log('errorClicked: ', commits.errorMessage);
        dispatch(commitsRejected(''));
    };

    return (
        <View>
            {repos.errorMessage != '' && (
                <TouchableOpacity
                    style={errorMessageStyles.container}
                    onPress={() => reposErrorClicked()}>
                    <Text>Error:</Text>
                    <Text>{JSON.stringify(repos.errorMessage)}</Text>
                </TouchableOpacity>
            )}
            {branches.errorMessage != '' && (
                <TouchableOpacity
                    style={errorMessageStyles.container}
                    onPress={() => branchesErrorClicked()}>
                    <Text>Error:</Text>
                    <Text>{JSON.stringify(branches.errorMessage)}</Text>
                </TouchableOpacity>
            )}
            {commits.errorMessage != '' && (
                <TouchableOpacity
                    style={errorMessageStyles.container}
                    onPress={() => commitsErrorClicked()}>
                    <Text>Error:</Text>
                    <Text>{JSON.stringify(commits.errorMessage)}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
