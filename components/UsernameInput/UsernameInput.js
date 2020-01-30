import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import usernameInputStyles from './UsernameInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsername } from '../../store/actions/searchActions';
import { fetchRepos } from '../../store/actions/reposActions';

const IconComponent = Ionicons;

export default function UsernameInput() {
    const [username, setUsername] = useState('');

    const loading = useSelector(state => state.repos.loading);

    const dispatch = useDispatch();

    const searchClicked = () => {
        console.log('clicked', username);
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
            {loading && (
                <ActivityIndicator
                    style={usernameInputStyles.loading}
                    size={35}
                />
            )}
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
