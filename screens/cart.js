import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import product from "../data/cart";
import CartItem from '../components/cartItem';
import Button  from '../components/button';
import {useNavigation} from "@react-navigation/native";


const Cart = () => {

  const navigation = useNavigation();

  const totalPrice = product.reduce((summedPrice, product) =>
    (summedPrice + product.item.price * product.item.quantity), 0);

  const onCheckout = () => {
    navigation.navigate('AddressForm');
  };

    return (
      <View style = {styles.page} >

        <View>
            <FlatList 
              data = {product}
              renderItem = {({item}) => (
              <CartItem item = {item.item}/>
               //render quantity selector
              )}
              showsVerticalScrollIndicator = {false}
              ListHeaderComponent = {() =>(
                <View>
                  <Text style ={{fontSize: 28}}>
                    Subtotal ({product.length} items): <Text style ={{fontSize: 18, color: "#f28d44"}}>${totalPrice}</Text>
                  </Text>
                  <Button text = "Proceed to checkout" onPress = {onCheckout}/>
                </View>
              )}
            />
        </View>

      </View>
    );
  }



  export default Cart;