import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Router from './router';
import Cart from './screens/cart';




const App = () => {

  return (
    <View style = {{flex:1}}>
       <Router />
    {/* <Cart/> */}
    </View>

  );
}


const styles = StyleSheet.create({

})
export default App;