import React from 'react';
import { View, Text, Image } from 'react-native';
import WelcomeStyles from './Welcome.styles';
import LoadingIndicator from '../../components/Loading/LoadingIndicator';

/**
 * Welcome screen component
 *
 * Contains app logo and loading indicator
 *
 * @param {boolean} props loading
 */
export default function Welcome(props) {
    return (
        <View style={WelcomeStyles.container}>
            <Image
                style={WelcomeStyles.logo}
                source={require('../../assets/RVicon.png')}
            />
            <Text style={WelcomeStyles.title}>RepoViewer</Text>
            {props.loading && <LoadingIndicator />}
        </View>
    );
}
