import React from 'react';
import { View, Text,Image } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Button from './button';
import QuantitySelector from './quantitySelector';
import styles from "./styles";




const ItemDescription = ({ item }) => {

    const [quantity, setQuantity] = useState(1);
    
    return (
        <View >

            <Image style = {styles.descriptionImage} source = {{uri: item.image}} />

            <View >
                <View style = {styles.titleContainer}>
                    <Text style ={styles.descriptiontitle}>{item.title}</Text>
                    <Text style = {{fontSize: 30}}>{item.price} </Text>
                </View> 
               

                <View style = {styles.description}>
                    <Text > {item.description}</Text>
                </View>

                <View>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                </View>
                         
                <View>
                    <Button text={'Add to cart'} onPress={() => {}} />
                    <Button text={'Buy now'} onPress={() => {}} />
                </View>
            </View>

        </View>

    );
};

export default ItemDescription;