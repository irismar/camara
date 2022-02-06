import React, { useState, useEffect,useRef } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ActivityIndicator, Alert, KeyboardAvoidingView, StatusBar, StyleSheet, Image,TouchableOpacity, Text,SafeAreaView,   View, ScrollView,Select, Modal } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';   
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text'
import { TextInput } from 'react-native-paper';

import styles from '../Estilo';

export default function Cadastro_usuario( {navigation, route}) {
  
  const [nome_usuario,setNome_usuario]=useState(null);
  const [load,setLoad]=useState(false);
  const [erro ,setErro]=useState(false);
    


function removeAcento (text)
{       
    text = text.toLowerCase();   
    text = text.trim();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    text = text.replace(new RegExp('[ ]','gi'), '_');
    text = text.replace(new RegExp('[,]','gi'), '');
    text = text.replace(new RegExp('[.]','gi'), '');
    text = text.replace(new RegExp('[@ # $ % ¨& * ( ). + ]','gi'), '');
    return text;                 
}
    
    

  
   


    
     function  analise(){
     var tipo_negocio=route.params?.tipo_negocio;
 setLoad(true)
  console.log('apertou salvar');
  
        
      fetch("https://anuncio360.com/projeto/verificar_user.php?user="+nome_usuario)
      ///// fetch('https://anuncio360.com/projeto/login.php?senha=123&&user=%20admin')
     .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson)
    if (responseJson.erro) {

     setErro(true)
      
    }else{
      navigation.navigate('Cadastro_usuario_1', {tipo_negocio:tipo_negocio,nome_usuario:nome_usuario}) 

    }
        
    })
      
      
    
    
    
 setLoad(false)   
       
      }        
    
    

if(load){


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
<Text style={styles.textologo}>Anuncio360.com </Text>
</View> 


< View style={styles.topo3} >

<FontAwesome.Button onPress={()=> navigation.goBack()  }  name="arrow-left" margin='2%' size={19} color="#42555e" backgroundColor="#9e9e9e00" >

</FontAwesome.Button>
</View> 

</View>

<View style={{  marginTop:30, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Carregando</Text>
               <View>
      <ActivityIndicator style={styles.container} size={84} color="#121212" />

    </View>

         </View>


 </>   

  )
}else {


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
  <Text style={styles.textologo}>Anuncio360.com </Text>
  </View> 


  < View style={styles.topo3} >
   
   <FontAwesome.Button onPress={()=> navigation.goBack()  }  name="arrow-left" margin='2%' size={19} color="#42555e" backgroundColor="#9e9e9e00" >
  
 </FontAwesome.Button>
    </View> 

</View>

<Modal  animationType="slide"
   
   visible={erro}>
<View style={{alignItems:'center',  flex: 1}} >
     
<View style={{alignItems:'center', marginTop:200, flexDirection:'row'}} >
     
    
     <View>     
     <FontAwesome.Button  onPress={()=>setErro(false) }  style={styles.button4} name="times-circle" size={20}     backgroundColor="#feffff" >
     <Text  style={styles.font_branca_16} >Já Existe usuario cadastrado com este nome  </Text>    
     </FontAwesome.Button>     
     </View>
     </View>

     <View style={{alignItems:'center', marginTop:100,    flexDirection:'row'}} >
     <Text>tente outro nome </Text>
     </View>
     
     
 </View> 
 
 
 
 
 
 
 
 
   </Modal> 


   <Text  style={styles.font} >  Anúncio  Selecionado {route.params?.tipo_anuncio}</Text>

<SafeAreaView style={styles.container}>
<KeyboardAvoidingView  style={styles.container}
       keyboardVerticalOffset={10}   >
      <ScrollView keyboardShouldPersistTaps={'handled'}>      
 
     


<TouchableOpacity  style={styles.button} >
      </TouchableOpacity>
      <View>
              <Input
 placeholder="Nome da Sua Marca ou Negocio"
   leftIcon={{ type: 'font-awesome', name: 'id-badge' }}   
   style={styles.input}    autoCorrect={false}
   onChangeText={value => setNome_usuario(removeAcento(value)) } />

<Text>anuncio360.com/{nome_usuario}</Text>           
              </View>
         <View >
     <FontAwesome.Button style={styles.salvar}   backgroundColor="#14151800" >
    
      </FontAwesome.Button>
      </View>


      <View >
      
      <FontAwesome.Button  onPress={()=>analise() }  style={styles.button4} name="save" size={20}     backgroundColor="#feffff" >
     <Text  style={styles.font_branca} >Cadastrar </Text>    
     </FontAwesome.Button> 

     
      </View>
   

      </ScrollView>   
      
</KeyboardAvoidingView>
     </SafeAreaView>

      </>    
  


    );
  } }
  
