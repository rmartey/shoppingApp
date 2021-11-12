import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
import styles from "./styles";
import ItemDescription from "../components/itemDescription";
import product from "../data/product";
import HeaderComponent from "../components/headerComponent";


const LandingPage = () => {


    return (
      <View style = {styles.page} >
        <HeaderComponent/>
        <View>
            <FlatList 
              data = {product}
              renderItem = {({item}) => (
              <ItemDescription item = {item.item}/>
               
              )}
            />
        </View>

      </View>
    );
  }



  export default LandingPage;