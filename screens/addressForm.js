import React, { useState } from "react";
import {View, Text, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import countryList from "country-list";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import Button from "../components/button"

const countries = countryList.getData();


const AddressForm = () => {

   

    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zipCode, setZipCode] = useState(null);


    const onCheckout = () => {
        if(!fullName){
            Alert.alert('Please enter your name');
            return;
        };
        if(!phone){
            Alert.alert('Please enter your Phone number');
            return;
        };
        if(!address){
            Alert.alert('Please enter your address');
            return;
        };
        
    };

    return (
        <View style = {styles.page}>
            <View>
                <Picker
                    style = {styles.countryPick}
                    onValueChange={setCountry}
                    selectedValue={country}
                >
                    {countries.map(country =>(
                        <Picker.Item value = {country.code} label = {country.name}/>
                    ))}
                    
                </Picker>

            </View>

            <View style = {styles.row}>
                <Text>Full name (First name and Last name)</Text>
                <TextInput placeholder = "Full name"  style = {styles.addressInput} value = {fullName} onChangeText = {setFullName}/>
            </View>

            <View style = {styles.row}>
                <Text>Phone Number</Text>
                <TextInput placeholder = "0248921881" style = {styles.addressInput} value = {phone} onChangeText = {setPhone} keyboardType = {"phone-pad"}/>
            </View>

            <View style = {styles.row}>
                <Text>Address</Text>
                <TextInput placeholder = "Street Address or P.O.Box" style = {styles.addressInput} value = {address} onChangeText = {setAddress}/>
                <TextInput placeholder = "Apt,Suite, Unit, Building (Optional)" style = {styles.addressInput} value = {fullName} onChangeText = {setFullName}/>
            </View>

            <View style = {styles.row}>
                <Text>City</Text>
                <TextInput placeholder = "" style = {styles.addressInput} value = {city} onChangeText = {setCity}/>
            </View>

            <View style = {styles.addressZS}>

                <View >
                    <Text>State</Text>
                    <Picker
                     style = {styles.pick}
                        onValueChange={setCountry}
                        selectedValue={country}
                    >
                    {countries.map(country =>(
                        <Picker.Item value = "" label = ""/>
                    ))}
                    
                </Picker>
                </View>
                <View>
                    <Text>Zip code</Text>
                    <TextInput placeholder = "0248921881" style = {styles.addressInput} value = {zipCode} onChangeText = {setZipCode} keyboardType={"phone-pad"}/>
                </View>
            </View>

            <View>
                <Button text={'Use this Address'} onPress={onCheckout} />
            </View>
        </View>
    );
};

export default AddressForm;
