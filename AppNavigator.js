import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home/Home';
import CommitScreen from './screens/commit/Commit';
import AboutScreen from './screens/about/About';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { View } from 'react-native';

/**
 * Navigation component
 *
 * Bottom tab bar component contains two separate stack navigators
 * Screens: Home, Commit, About and error message components.
 *
 *              Commit
 *                |
 *              Home    About
 *                |       |
 *              error-message
 * TabBar-->    Search  About
 */
const TabBarComponent = props => <BottomTabBar {...props} />;

/** General stack navigator config */
const stackNavigatorConfig = {
    headerStyle: {
        backgroundColor: '#eee',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        width: 300,
    },
};

/** Home stack navigator */
const HomeStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Commit: CommitScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: stackNavigatorConfig,
    }
);

/** About stack navigator */
const AboutStackNavigator = createStackNavigator(
    {
        About: AboutScreen,
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: stackNavigatorConfig,
    }
);

/** Bottom tab navigator */
const TabNavigator = createBottomTabNavigator(
    {
        Search: HomeStackNavigator,
        About: AboutStackNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Search') {
                    iconName = `md-search`;
                } else if (routeName === 'About') {
                    iconName = `md-information-circle-outline`;
                }
                return (
                    <IconComponent
                        name={iconName}
                        size={25}
                        color={tintColor}
                    />
                );
            },
        }),
        tabBarOptions: {
            activeTintColor: 'blue',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                // backgroundColor: '#eeeeee',
            },
        },
        tabBarComponent: props => (
            <View>
                <ErrorMessage />
                <TabBarComponent
                    {...props}
                    style={{
                        borderTopColor: '#605F60',
                        backgroundColor: '#eeeeee',
                    }}
                />
            </View>
        ),
    }
);

export default createAppContainer(TabNavigator);
