import * as React from 'react';
import {ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//const image = { source: '../images/background.png'};


const logIn = () => {
    return (
        <ImageBackground style = {{flex: 1,justifyContent: 'center',}} source={ require('../images/background.png')} resizeMode ="cover">
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <View style ={{
                    width: 320,
                    height: 50,
                    flexDirection: "column",
                    marginBottom: 20,
                }}>
                    <Text style={{fontSize:25, fontWeight: "500",}}>Login</Text>
                    <Text>Please sign in to continue</Text>
                </View>

                <View style = {{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 330,
                    height: 70,
                    margin: 20,
                    borderRadius: 10,
                    shadowColor: '#000000',
                    shadowOffset: {
                    width: 0,
                    height: 1
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    padding: 10,

                }}>
                
                    <Text>Email</Text>

                    <View style = {{
                        flexDirection: 'row',}}>
                            
                        <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" />
                        <TextInput style = {{
                            marginLeft:10,
                            fontWeight: "500",
                            fontSize: 20,
                        
                            
                        }} placeholder = "user123@gmail.com"></TextInput>
                    </View>
                </View>

                <View style = {{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 330,
                    height: 70,
                    margin: 10,
                    borderRadius:10,
                    shadowColor: '#000000',
                    shadowOffset: {
                    width: 0,
                    height:2
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    padding: 10,
                }}>
                    
                    <View style = {{
                        flexDirection: 'row',}}>
                            
                        <Feather name="unlock" size={24} color="black" />
                        <TextInput style = {{
                            marginLeft:10,
                            fontWeight: "500",
                            fontSize: 20,
                            
                        }} placeholder = "password"></TextInput>
                        <Text style = {{color: "orange", marginLeft: 14,}}>Forgot</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style = {{
                        width:200,
                        height:30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "grey",
                        borderRadius: 10,
                        opacity: 0.5,
                        marginTop: 20,

                    }}>
                        <Text style = {{fontWeight:"900", color:"orange"}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                
                </View>
        </ImageBackground>


            );
        }
        
  export default logIn;