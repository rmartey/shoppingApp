import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
//import styles from "./styles";

const Button = ({text, onPress}) => {
    return(
        <Pressable onPress = {onPress} style = {styles.root}>
            <Text style = {styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor: "#e6b01e",
        marginVertical:10,
        height:35,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:5,
        borderWidth: 1,
        borderColor: "#2b2002"
    },
    text:{
        fontSize:16,
    },
});


export default Button;