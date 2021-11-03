import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import ItemDescription from "../components/itemDescription";
import product from "../data/product";


const LandingPage = () => {
    return (
      <View style = {styles.page} >
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