import React, { useState, useEffect,useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, StyleSheet,TouchableOpacity,  TextInput,  View} from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import styles from '../Estilo';
export default function Cadastro( {navigation, route}) {
 
  

 
  
 
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
          
         <FontAwesome.Button onPress={()=>navigation.navigate('Login')  }  name="arrow-left" margin='2%' size={19} color="#42555e" backgroundColor="#9e9e9e00" >
  
  </FontAwesome.Button>
           </View> 

       </View>
       <View style={{ flex: 1, alignItems: 'center',  }}>

      <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{   fontFamily:'Ubuntu_300Light', fontSize:33, alignItems: 'center', margin:'10%', justifyContent: 'center' }}>Vou Anunciar </Text>

      </TouchableOpacity>


      
            
      <FontAwesome.Button onPress={()=>navigation.navigate('Imovel', {tipo_anuncio:'Imovel'}) } style={styles.button_branco_300}name="home"  size={22}  >
      <Text  style={styles.font_branca} >Imovel </Text>
      </FontAwesome.Button>

      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Automovel', {tipo_anuncio:'Automovel'}) } style={styles.button_branco_300} name="car" size={22}   >
      <Text  style={styles.font_branca} >Automovel </Text>
      </FontAwesome.Button>
      
      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Local',  {tipo_anuncio:'Local'}) } style={styles.button_branco_300} name="map" size={22} color="#ffffff"  >
      <Text  style={styles.font_branca} >Locais</Text>
      </FontAwesome.Button>
      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=> navigation.navigate('Cadastro_usuario', {tipo_anuncio:'Produto'}) } style={styles.button_branco_300} name="cart-plus" size={22} color="#ffffff"  >
      <Text  style={styles.font_branca} >Produtos </Text>
      </FontAwesome.Button>

      
      </View>

      </>
    ) 
  
  
  }