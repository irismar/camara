import React, { useState, useEffect,useRef } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { Alert, KeyboardAvoidingView, StatusBar, StyleSheet, Image, Text, TextInput,  View, ScrollView,Select } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { Picker  } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Marker } from 'react-native-maps';


import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Estilo';


export default function Cadastro_endereco( {navigation, route}) {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
 
 
  console.log('pagina  endereco') 

 
  useEffect(() => {
 localizacao()
   

    
  }, []);




 const localizacao = async () => {
  var lat= await AsyncStorage.getItem('LATITUDE')
  var lon= await AsyncStorage.getItem('LONGITUDE')
 if(lat){setLatitude( { 
  latitude:lat,
  longitude:  lon,
  latitudeDelta: 0.0011,
  longitudeDelta: 0.0011,}
   
  )}
 
 }
 console.log(latitude); 
       return (
        <View style = {styles.container}> 
      <MapView 
        style = {{alignSelf: 'stretch', height: '50%'}} 
        region = {latitude} 
      > 
        <Marker coordinate = {latitude} title = 'Marker' /> 
      </MapView> 
      
    </View>
    
    )
   
  }
  
