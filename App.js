import React from 'react';
import { View, StyleSheet } from 'react-native';

import Router from './router';
import Cart from './screens/cart';

import Amplify from 'aws-amplify'
import {withAuthenticator} from "aws-amplify-react-native";
import config from './src/aws-exports'
Amplify.configure(config)




const App = () => {

  return (
    <View style = {{flex:1}}>
       <Router />
    </View>

  );
}


const styles = StyleSheet.create({

})
export default withAuthenticator(App);