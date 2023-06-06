  
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./telas/HomeScreen"
import FeedScreen from "./telas/FeedScreen";
import ProfileScreen from "./telas/ProfileScreen";
import LoginScreen from "./telas/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawerNavigator from "./navegação/DrawerNavigator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao projeto React Native feito por Daniel Assis</Text>

      <NavigationContainer>
        <MyDrawerNavigator />
        <Stack.Navigator initialRouteName="Tela de Home">
          <Stack.Screen name="Tela de Home" component={HomeScreen} />
          <Stack.Screen name="Tela de Perfil" component={ProfileScreen} />
          <Stack.Screen name="Tela de Login" component={LoginScreen} />
          <Stack.Screen name="Tela de Feed" component={FeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <ImageBackground
        source={require("./assets/wallpaper.jpeg")}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default App;
