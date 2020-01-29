import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home/Home';
import CommitScreen from './screens/commit/Commit';
import AboutScreen from './screens/about/About';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

const TabBarComponent = props => <BottomTabBar {...props} />;

const stackNavigatorConfig = {
    headerStyle: {
        backgroundColor: '#eee',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        width: 300,
    },
};

const SearchStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Commit: CommitScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: stackNavigatorConfig,
    }
);

const AboutStackNavigator = createStackNavigator(
    {
        About: AboutScreen,
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: stackNavigatorConfig,
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Search: SearchStackNavigator,
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
            <TabBarComponent
                {...props}
                style={{
                    borderTopColor: '#605F60',
                    backgroundColor: '#eeeeee',
                }}
            />
        ),
    }
);

export default createAppContainer(TabNavigator);
