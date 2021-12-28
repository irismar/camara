import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, KeyboardAvoidingView, ActivityIndicator, StatusBar, StyleSheet, Image, TextInput, View, ScrollView, Select, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Estilo';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Local( {navigation, route}) {
    return (
      <>
      
      <Topo/>
      <Text>Eu sou Locais</Text>
      </>
    );
  
 function Topo() {
 
  

 
   
  return (
    

    <>
     <StatusBar backgroundColor="#000" translucent={true} />
     <View style={{flexDirection:'row'}} >

     <View style={styles.topo1} >
     <FontAwesome.Button onPress={()=>navigation.navigate('Home_logado')  }  name="arrow-left" margin='2%' size={19} color="#42555e" backgroundColor="#9e9e9e00" >
  
  </FontAwesome.Button>
       </View> 
     
       <View style={styles.topo2} >
      
       </View> 


       < View style={styles.topo3} >
        
     
         </View> 

     </View>

    </>
  ) 


}
  
  }




