import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import LoadingIndicatorStyles from './LoadingIndicator.styles';

export default function LoadingIndicator() {
    return (
        <View style={LoadingIndicatorStyles.container}>
            <ActivityIndicator size={35} />
        </View>
    );
}
