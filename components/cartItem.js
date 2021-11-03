import React, {useState} from 'react';
import { View, Text,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import QuantitySelector from './quantitySelector';



const CartItem = ({ item }) => {
 const [quantity, setQuantity] = useState(item.quantity);
    return (
      
        <View style = {styles.root}>

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
            <View style = {{alignItems: "end", marginTop: 10, justifyContent: "flex-end"}}>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} style = {{}}/>
            </View>
          </View>
        </View>

    );
};

export default CartItem;