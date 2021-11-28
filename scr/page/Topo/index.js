import React from 'react';
import {  Text } from 'react-native-elements';
import {   View} from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import styles from '../Estilo';



export default function Topo( {navigation, route}) {
 
  

 
   
    return (
      

      <>
       <StatusBar backgroundColor="#000" translucent={true} />
       <View style={{flexDirection:'row'}} >

       <View style={styles.topo1} >
         <Image
          source ={require('../../asset/logo_50.png')}
          style={styles.head}
         />
         </View> 
       
         <View style={styles.topo2} >
         <Text style={styles.textologo}>Anuncio360.com</Text>
         </View> 


         < View style={styles.topo3} >
          
          <FontAwesome.Button onPress={()=>navigation.navigate('Cadastro')}  name="plus-circle" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
          <Text  style={styles.fonteadicionar} > </Text>
        </FontAwesome.Button>
           </View> 

       </View>

      </>
    ) 
  
  
  }