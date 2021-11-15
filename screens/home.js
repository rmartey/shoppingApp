import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, TextInput} from 'react-native';
import HeaderComponent from "../components/headerComponent";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import ProductItem from "../components/productItem";
import products from "../data/products";



const HomeScreen = ({searchValue}) => {

  return (
      <View style = {styles.page} >

        <HeaderComponent/>
        
        <View>
            <FlatList 
              data = {products}
              renderItem = {({item}) => <ProductItem item = {item}/>}
              showsVerticalScrollIndicator = {false}
            />
        </View>

      </View>
    );
  };



  export default HomeScreen;