import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
//import product from "../data/product";
import QuantitySelector from "../components/quantitySelector";
import Button from "../components/button";

import { DataStore} from "@aws-amplify/datastore";
import { Auth } from 'aws-amplify';
import { Product, CartProduct } from "../src/models";

const LandingPage = ({ route }) => {
  
  const [product, setProduct] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  //    const route = useRoute();

  useEffect(() => {
    if (!route.params.id) {
      return;
    }

    DataStore.query(Product, route.params.id).then(setProduct);
  }, [!route.params.id]);

  if (!product) {
    return null;
  }

  const onAddToCart = async () => {

    const userData = await Auth.currentAuthenticatedUser();

    if (!product | !userData){
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      // option,
      productID: product.id,
    });
    

    await DataStore.save(newCartProduct);
    navigation.navigate('shoppingcart', { screen: 'Cart'});
  };

  return (
    <ScrollView style={{ backgroundColor: "white", padding: 10,  }}>
      <SafeAreaView>
        <Text style={styles.title}>{product.title}</Text>

        {/*Image Carousel */}
        <Image
          style={styles.descriptionImage}
          source={{ uri: product.image }}
        />

        {/*Option Selector
                <Picker>
                    {Product.option.map(option =>(<Picker.Item label ={option} value = {option} />))}
                </Picker>
                */}

        {/*Price */}
        <Text style={styles.price}>
          ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          )}
        </Text>

        {/* Description*/}
        <Text style={styles.description}>{product.description}</Text>

        {/*  Quantity Selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/*Button */}
        <Button text={"Add to cart"} onPress={onAddToCart} />
        <Button text={"Buy now"} onPress={() => {}} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default LandingPage;
