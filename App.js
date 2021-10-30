import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/home";
import logIn from "./screens/login";
import cart from "./screens/cart";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "HomeScreen">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="logIn" component={logIn} />
        <Tab.Screen name="cart" component={cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;