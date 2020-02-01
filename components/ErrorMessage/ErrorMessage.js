import React from 'react';
import { View, Text } from 'react-native';
import errorMessageStyles from './ErrorMessage.styles';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { reposRejected } from '../../store/actions/reposActions';
import { branchesRejected } from '../../store/actions/branchesActions';
import { commitsRejected } from '../../store/actions/commitsActions';

/**
 * Error message component
 *
 * Message is cleared on click
 */
export default function ErrorMessage() {
    const repos = useSelector(state => state.repos);
    const branches = useSelector(state => state.branches);
    const commits = useSelector(state => state.commits);

    const dispatch = useDispatch();

    /** clear repos error message */
    const reposErrorClicked = () => {
        dispatch(reposRejected(''));
    };

    /** clear branches error message */
    const branchesErrorClicked = () => {
        dispatch(branchesRejected(''));
    };

    /** clear commits error message */
    const commitsErrorClicked = () => {
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
