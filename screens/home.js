import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import ProductItem from "../components/ProductItem";
import products from "../data/products";


const HomeScreen = () => {
    return (
      <View style = {styles.page} >

        <View style = {{ 
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center",
        
        }}>

          <Text style = {{fontSize: 50}}>
            Discover
          </Text>

          <View style = {{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 10,


          }}>
            <TouchableOpacity><EvilIcons name="search" size={28} color="black" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="notifications-outline" size={30} color="black" /></TouchableOpacity>

          </View>

        </View> 
        <View>
            <FlatList 
              data = {products}
              renderItem = {({item}) => <ProductItem item = {item}/>}
            />
        </View>

      </View>
    );
  }



  export default HomeScreen;