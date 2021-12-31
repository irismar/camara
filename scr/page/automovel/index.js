import React from "react";
import { View,ScrollView, Text, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from '../Estilo';
export default function Automovel( {navigation, route}) {


    return (
      <View style={{ flex: 1, }}>
    
        <Button 
         title="eu sou Automovel "
         onPress={ ()=>navigation.navigate('Home') }
         />


    <GooglePlacesAutocomplete   styles={{ width:350, }} 
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBTCJwwUlXn00DQX19Tr89S6hfEERGxaNg',
        language: 'pt-br',
      }}
    />
  

      </View>
    );
  }