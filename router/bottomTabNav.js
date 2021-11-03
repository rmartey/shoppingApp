import React from "react";
import HomeScreen from "../screens/home";
import Cart from "../screens/cart";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const BottomTabNav = () => {
    return(

            <Tab.Navigator tabBarOptions = {{showLabel: false, inactiveTintColor: "#1f60e0", activeTintColor: "#e38b2d"}}>
                <Tab.Screen 
                    component = {HomeScreen} 
                    name = "home"
                    options = {{
                        tabBarIcon: ({color}) => (<Entypo name="home" size={24} color={color} />)}            
                    }
                />
                <Tab.Screen 
                    component = {Cart} 
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