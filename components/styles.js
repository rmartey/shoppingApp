import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    root: {
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderColor: "#c4c4c4",
      borderRadius: 10,
      backgroundColor: "#fcfcfc",
      margin: 5,

    },
    descriptionImage: {
      height:450,
      resizeMode: "cover",
      borderRadius: 10,
      padding: 10,
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
    descriptiontitle: {
      fontSize: 50,
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
    descriptionRating:{
      flexDirection: "row",
      marginVertical: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    description:{
      padding: 10,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center"
      
    },
    titleContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    
  });

  export default styles;