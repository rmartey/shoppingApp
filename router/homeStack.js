import React, {useState} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/home";
import LandingPage from "../screens/landingPage";


const Stack = createNativeStackNavigator();



const HomeStack = () => {

    const [searchValue, setSearchValue] = useState('');
    return(

        <Stack.Navigator screenOptions= {{headerShown:false}}>
            <Stack.Screen name = "HomeScreen" >
                {() => <HomeScreen searchValue = {searchValue}/>}
            </Stack.Screen>
            <Stack.Screen component = {LandingPage} name = "LandingPage" />
        </Stack.Navigator>

    );
};

export default HomeStack;