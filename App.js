import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import HomeScreen from "./screens/home";
//import LandingPage from './components/LandingPage';
import Page from './screens/Page';
import LogIn from "./screens/login";
//import cart from "./screens/cart";
import LandingPage from './screens/Page';
//import { SafeAreaView } from 'react-native-safe-area-context';



//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();


const App = () => {
  return (
    <View>
      
      <Page />
      {/*<NavigationContainer>
        <Tab.Navigator initialRouteName = "LandingPage">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="logIn" component={logIn} />
          <Tab.Screen name="cart" component={cart} />
          <Tab.Screen name="LandingPage" component={LandingPage} />
        </Tab.Navigator>
      </NavigationContainer>*/}
    </View>

  );
}


const styles = StyleSheet.create({

})
export default App;