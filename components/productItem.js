import * as React from 'react';
import { View, Text,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";



const ProductItem = ({ item }) => {

  const navigation = useNavigation();

  const land = () => {
    navigation.navigate('LandingPage',{/*{id} */} );
  }
    return (
        <Pressable onPress = {land} style = {styles.root}>

          <Image style={styles.image} source = {{uri: item.image}} />

          <View style = {styles.rightContainer}>
            <Text style = {styles.title} numberOfLines = {3}>{item.title}</Text>
              {/* Ratings */}
            <View style = {styles.ratingsContainer}>
             {
               [0,0,0,0].map((el, i ) =>
              <FontAwesome
              key = {`${item.id}-${i}`}
                style = {styles.star}
                name= {i < Math.floor(item.avgRating) ? "star" : "star-o"} 
                size={15} color="#f5a822" />)
              }
              <Text style = {styles.ratings}>{item.ratings}</Text>
            </View>
            <Text style = {styles.price}>
              {item.price}
              {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
            </Text>
          </View>
        </Pressable>

    );
};

export default ProductItem;