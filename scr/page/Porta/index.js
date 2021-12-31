import React, { useState, useEffect,useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, StyleSheet,TouchableOpacity,  TextInput,  View} from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import styles from '../Estilo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';  


export default function Porta( {navigation, route}) {
 
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
   const[utl, setutl]=useState();
  console.log('porta')
     
  useEffect(() => {

      
   
  async function lat   ()  {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }  else{

  let location = await Location.getCurrentPositionAsync({});
  setLocation(location);
  if(location){
  var lat = JSON.stringify(location.coords.latitude);
  var lon = JSON.stringify(location.coords.longitude);
  AsyncStorage.setItem('LATITUDE', JSON.stringify(location.coords.latitude))
  AsyncStorage.setItem('LONGITUDE',JSON.stringify(location.coords.longitude))
  setErrorMsg(lat)

  const tor= await AsyncStorage.getItem('TOKEN')
console.log(tor)
   if(tor){
    navigation.reset({
        index: 0,
        routes: [{ name: 'Home_logado' }],
      });

   } else{ 
    navigation.navigate('Home', {Latitude: lat,Longitude:lon})     
   
   }


  } }  }
 
  lat()
  

  //// token   () 
 }, []);


 


async function token   ()  {
const tor= await AsyncStorage.getItem('TOKEN')
console.log(tor)
   if(tor){
    navigation.reset({
        index: 0,
        routes: [{ name: 'Home_logado' }],
      });

   } else{ 
     
    
    navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
    params: { latitude: latitude }
  }); }

  }
  return(

    <>
 
    
     </>
  );
   
  }