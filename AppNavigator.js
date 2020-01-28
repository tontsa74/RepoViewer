
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home/Home';
import CommitScreen from './screens/commit/Commit';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Commit: CommitScreen,
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        width: 300,
      },
    }
  });
  
  export default createAppContainer(AppNavigator);