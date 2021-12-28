import React, { useState, useEffect,useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, StyleSheet,TouchableOpacity,  TextInput,  View} from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import styles from '../Estilo';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Configuracao( {navigation, route}) {
 

    const [token, setToken] = useState('0');
  
    async function sair  () {
 
            await AsyncStorage.clear();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
          }
         
            ///////////navigation.reset('Home')
      
      
   
      
      ///  ///navigation.navigate('Home')
      

  

 
  
 
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
          
          <FontAwesome.Button onPress={()=>navigation.navigate('Home_logado')}  name="home" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
          <Text  style={styles.fonteadicionar} > </Text>
        </FontAwesome.Button>
           </View> 
        
       </View>
       <View style={{ flex: 1, alignItems: 'center' }}>
       <Text  style={styles.font} ></Text>
       
      <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{   fontFamily:'Ubuntu_300Light', fontSize:22, alignItems: 'center', margin:'10%', justifyContent: 'center' }}>Configurações </Text>
      </TouchableOpacity>
   
      <TouchableOpacity  style={styles.button} >
      </TouchableOpacity>
      <FontAwesome.Button onPress={()=>sair()} style={styles.button_branco_300} name="sign-out" size={20}    color="#ffffff" backgroundColor="#feffff" >
      <Text  style={styles.font_branca} >sair </Text>
      </FontAwesome.Button>

      
      </View>

      </>
    ) 
  
  
  }