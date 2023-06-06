
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './telas/HomeScreen';
import ProfileScreen from './telas/ProfileScreen';
import LoginScreen from './telas/LoginScreen';
import FeedScreen from './telas/FeedScreen';

const Drawer = createDrawerNavigator();

function MyDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tela de Home" component={HomeScreen} />
        <Drawer.Screen name="Tela de Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Tela de Login" component={LoginScreen}/>
        <Drawer.Screen name="Tela de Feed" component={FeedScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawerNavigator;