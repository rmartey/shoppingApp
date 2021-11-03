import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    addressInput: {
      backgroundColor: "White",
      padding: 5,
      marginVertical: 5,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "lightgrey",

    },
    addressZS:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 5,
    },
    pick:{
      height:37,
      width: 90,
      marginBottom: 5,
      marginTop: 2,
      borderRadius: 5,
    },
    countryPick: {
      fontSize:24,
      height:37,
      borderRadius: 5,
      margin: 10,
    },

    row: {
      margin:10,
    }

});

export default styles;