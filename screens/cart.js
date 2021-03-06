import React, {useState,useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';

import { DataStore} from "@aws-amplify/datastore";
import { Auth } from 'aws-amplify';
import { Product, CartProduct } from "../src/models";


import styles from "./styles";
// import product from "../data/cart";
import CartItem from '../components/cartItem';
import Button  from '../components/button';
import {useNavigation} from "@react-navigation/native";


const Cart = () => {

  const [products, setProducts] = useState([]);

  const navigation = useNavigation();

  const totalPrice = products.reduce((summedPrice, product) =>
    (summedPrice + products.item.price * products.item.quantity), 0);

  const onCheckout = () => {
    navigation.navigate('AddressForm');
  };

    return (
      <View style = {styles.page} >

        <View>
            <FlatList 
              data = {products}
              renderItem = {({item}) => (
              <CartItem item = {item.item}/>
               //render quantity selector
              )}
              showsVerticalScrollIndicator = {false}
              ListHeaderComponent = {() =>(
                <View>
                  <Text style ={{fontSize: 28}}>
                    Subtotal ({products.length} items): <Text style ={{fontSize: 18, color: "#f28d44"}}>${totalPrice}</Text>
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