import React from "react";
import HomeScreen from "../screens/home";
import ShoppingCartStack from "./shoppingCartStack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from "./homeStack";
import AccountInfo from "../screens/accountInfo";

const Tab = createBottomTabNavigator();


const BottomTabNav = () => {
    return(

            <Tab.Navigator screenOptions = {{headerShown: false}} tabBarOptions = {{showLabel: false, inactiveTintColor: "#f0d0a1", activeTintColor: "#f59300"}}>
                <Tab.Screen 
                    component = {HomeStack} 
                    name = "home"
                    options = {{
                        tabBarIcon: ({color}) => (<Entypo name="home" size={24} color={color} />)}            
                    }
                />

                <Tab.Screen 
                    component = {AccountInfo} 
                    name = "accountInfo"
                    options = {{
                        tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account-outline" size={24} color={color} />)}            
                    }
                />

                <Tab.Screen 
                    component = {ShoppingCartStack} 
                    name = "cart" 
                    options = {{
                        tabBarIcon: ({color}) => (<MaterialCommunityIcons name="cart-arrow-down" size={24} color={color} />)}            
                    }
                />
                {/*<Tab.Screen component = {Profile} name = "profile" />*/}
                
            </Tab.Navigator>

    );
};

export default BottomTabNav;