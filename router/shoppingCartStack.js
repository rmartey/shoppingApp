import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddressForm from "../screens/addressForm";
import Cart from "../screens/cart";


const Stack = createNativeStackNavigator();



const ShoppingCartStack = () => {
    return(

        <Stack.Navigator screenOptions= {{headerShown: false}}>
            <Stack.Screen component = {Cart} name = "Cart" />
            <Stack.Screen component = {AddressForm} name = "AddressForm" />
        </Stack.Navigator>

    );
};

export default ShoppingCartStack;