import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './telas/LoginScreen';
import HomeScreen from './telas/HomeScreen';
import ProfileScreen from './telas/ProfileScreen';
import FeedScreen from './telas/FeedScreen';

const Tab = createBottomTabNavigator();

function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tela de Home" component={HomeScreen} />
        <Tab.Screen name="Tela de Perfil" component={ProfileScreen} />
        <Tab.Screen name="Tela de Login" component={LoginScreen}/>
        <Tab.Screen name="Tela de Feed" component={FeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
