import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
    },
    usernameInput: {
        flex: 1,
        fontSize: 24,
        padding: 10,
    },
    searchButton: {
        marginRight: 10,
    },
    loading: {
        paddingHorizontal: 5,
    }
});

export default styles;
