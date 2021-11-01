import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    root: {
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 10,
      backgroundColor: "#fcfcfc",
      margin: 5,

    },
    image: {
      height:150,
      resizeMode: "contain",
      flex: 2,
    },
    rightContainer:{
      padding: 10,
      flex: 3,
    },
    title: {
      fontSize: 24,
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",

    },
    oldPrice:{
      fontSize:12,
      marginLeft: 5,
      textDecorationLine: "line-through", 
    },
    ratings: {
      marginLeft: 10,
      fontSize: 12,
    },
    ratingsContainer:{
      flexDirection: "row",
      marginVertical: 5,
    },
    
  });

  export default styles;