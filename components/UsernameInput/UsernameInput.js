import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import usernameInputStyles from './UsernameInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { searchUsername } from '../../store/actions/searchActions';
import { fetchRepos } from '../../store/actions/reposActions';

const IconComponent = Ionicons;

export default function UsernameInput() {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const searchClicked = () => {
        console.log('clicked', username);
        if (username) {
            dispatch(searchUsername(username));
            dispatch(fetchRepos(username));
            setUsername('');
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
