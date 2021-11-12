import React, {useState}from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';



const HeaderComponent = () => {

    const [searchValue, setSearchValue] = useState('');
    return (
      <SafeAreaView style = {{backgroundColor: "#0edce3"}}>
  
            <View  style = {{height: 40, margin: 10, padding: 5,  backgroundColor: "#ffffff", flexDirection: "row", alignItems: "center"}}>
              <EvilIcons name="search" size={20} color="black" />
              <TextInput value = {searchValue} onChangeText = {setSearchValue} placeholder = "search..."  style = {{height: 40, marginLeft: 10}}/>
            </View>
  
          </SafeAreaView>
    );
  };

  export default HeaderComponent;