import React from "react";
import {View, SafeAreaView, Pressable, Text} from "react-native";
import {Auth} from "aws-amplify";
import Button from "../components/button";


const AccountInfo = () => {

    const onLogout = () => {
        Auth.signOut();
    };
    return (
        <SafeAreaView>
            <Button onPress = {onLogout} text = "Log Out"/>

        </SafeAreaView>
    );
};


export default AccountInfo;