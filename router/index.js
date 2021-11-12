import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from "./bottomTabNav";


const Root = createNativeStackNavigator();



const Router = () => {
    return(
        <NavigationContainer>
            <Root.Navigator screenOptions = {{headerShown: false}}>
                <Root.Screen component = {BottomTabNav} name = "homeTabs" />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default Router;