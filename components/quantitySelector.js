import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const QuantitySelector = ({quantity, setQuantity}) => {

    const onMinus = () =>{
        setQuantity(Math.max(0, quantity - 1));
    };


    const onPlus = () =>{
        setQuantity(quantity + 1);
    };
    return(

        <View style = {styles.root}>
            <Pressable onPress = {onMinus} style = {styles.button}>
                <Text style = {styles.buttonText}>-</Text>
            </Pressable>

            <Text style = {styles.buttonText}>{quantity}</Text>

            <Pressable onPress = {onPlus} style = {styles.button}>
                <Text>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#949494",
        width: 110,
    },
    button:{
        width:30,
        height:30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c4c4c4"
    },
    buttonText:{

    },
    quantity:{

    },
})


export default QuantitySelector;
