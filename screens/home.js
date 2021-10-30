import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const categories = () =>{
  return (
    <View>
      <FlatList>

      </FlatList>

    </View>
  );
}

const HomeScreen = () => {
    return (
      <View style = {{flex: 1, }} >



        <View style = {{ 
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center",
        
        }}>

          <Text style = {{fontSize: 50}}>
            Discover
          </Text>

          <View style = {{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 10,


          }}>
            <TouchableOpacity><EvilIcons name="search" size={28} color="black" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="notifications-outline" size={30} color="black" /></TouchableOpacity>

          </View>

        </View>



      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  export default HomeScreen;