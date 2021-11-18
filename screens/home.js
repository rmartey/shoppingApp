import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import HeaderComponent from "../components/headerComponent";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ProductItem from "../components/productItem";
//import products from "../data/products";
import { DataStore } from "@aws-amplify/datastore";
import { Product } from "../src/models";

const HomeScreen = ({ searchValue }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);
  return (
    <View>
      <SafeAreaView style={styles.page}>
        <HeaderComponent />

        <View>
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
