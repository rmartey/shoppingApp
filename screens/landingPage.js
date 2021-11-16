import React, {useState, useEffect}from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
//import product from "../data/product";
import QuantitySelector from "../components/quantitySelector";
import Button from "../components/button";

import { DataStore } from '@aws-amplify/datastore';
import {Product} from "../src/models"


const LandingPage = ( {route}) =>{



    const [product, setProduct] = useState(undefined);
    

    const [quantity, setQuantity] = useState(1);

//    const route = useRoute();

    useEffect(() => {

        if (!route.params.id){
            return;
        }

        DataStore.query(Product, route.params.id).then(setProduct);

    }, [!route.params.id]);

    if (!product){
       return null;
    }

    return (
        <View style = {{backgroundColor: "white", padding: 10,}}>

            <Text style = {styles.title}>{product.title}</Text>



            {/*Image Carousel */}
            <Image style = {styles.descriptionImage} source = {{uri: product.image}} />


            {/*Option Selector
            <Picker>
                {Product.option.map(option =>(<Picker.Item label ={option} value = {option} />))}
            </Picker>
             */}



            {/*Price */}
            <Text style = {styles.price}>
              ${product.price}
              {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
            </Text>


            {/* Description*/}
            <Text style = {styles.description}>
                {product.description}
            </Text>

            {/*  Quantity Selector */}
             <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/*Button */}
            <Button text={'Add to cart'} onPress={() => {}} />
            <Button text={'Buy now'} onPress={() => {}} />


        </View>
    );
};

export default LandingPage;