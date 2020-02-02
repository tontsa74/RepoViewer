import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import usernameInputStyles from './UsernameInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsername } from '../../store/actions/searchActions';
import { fetchRepos } from '../../store/actions/reposActions';
import LoadingIndicator from '../Loading/LoadingIndicator';

const IconComponent = Ionicons;

/**
 * Username input component
 *
 * Contains text input, button and loading indicator
 * Dispatches user repositories to redux store
 *
 */
export default function UsernameInput() {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    /**
     * Dispatch username and user repositories
     *
     */
    const searchClicked = () => {
        if (username) {
            dispatch(searchUsername(username));
            dispatch(fetchRepos(username));
            setUsername('');
            Keyboard.dismiss();
        }
    };

    return (
        <View style={usernameInputStyles.container}>
            <TextInput
                style={usernameInputStyles.usernameInput}
                placeholder="Search by username"
                onChangeText={value => setUsername(value)}
                value={username}
                onSubmitEditing={() => searchClicked()}
            />
            <TouchableOpacity onPress={() => searchClicked()}>
                <IconComponent
                    style={usernameInputStyles.searchButton}
                    name={'md-search'}
                    size={40}
                    color={'blue'}
                />
            </TouchableOpacity>
        </View>
    );
}
