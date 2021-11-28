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
          
          <FontAwesome.Button onPress={()=>navigation.navigate('Home')}  name="home" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
          <Text  style={styles.fonteadicionar} > </Text>
        </FontAwesome.Button>
           </View> 

       </View>
       <View style={{ flex: 1, alignItems: 'center' }}>

      <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{   fontFamily:'Ubuntu_300Light', fontSize:33, alignItems: 'center', margin:'10%', justifyContent: 'center' }}>Vou Anunciar </Text>

      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Imovel')}  style={styles.button3}name="home"  size={39} color="#36a9a9" backgroundColor="#feffff" >
      <Text  style={styles.font} >Imovel </Text>
      </FontAwesome.Button>

      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Automovel')} style={styles.button3} name="car" size={39} color="#c53a2f" backgroundColor="#feffff" >
      <Text  style={styles.font} >Automovel </Text>
      </FontAwesome.Button>
      
      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Sobre')} style={styles.button3} name="map" size={39} color="#196fe1" backgroundColor="#feffff" >
      <Text  style={styles.font} >Locais</Text>
      </FontAwesome.Button>
      <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>navigation.navigate('Cadastro_produto')} style={styles.button3} name="cart-plus" size={39}   borderRadius={12} color="#fbbc04" backgroundColor="#feffff" >
      <Text  style={styles.font} >Produto </Text>
      </FontAwesome.Button>

      
      </View>

      </>
    ) 
  
  
  }