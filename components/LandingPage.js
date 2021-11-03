import React, {useState}from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import product from "../data/product";
import QuantitySelector from "./quantitySelector";
import Button from "./button";


const LandingPage = () =>{

    const [quantity, setQuantity] = useState(1);

    return (
        <View style = {{backgroundColor: "white", padding: 10,}}>
            <Text style = {styles.title}>{product.title}</Text>



            {/*Image Carousel */}


            {/*Option Selector
            <Picker>
                {Product.option.map(option =>(<Picker.Item label ={option} value = {option} />))}
            </Picker>
             */}



            {/*Price */}
            <Text style = {styles.price}>
              {product.price}
              {product.oldPrice && <Text style={styles.oldPrice}>{product.oldPrice}</Text>}
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