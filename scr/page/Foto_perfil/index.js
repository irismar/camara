import React, { useState, useEffect } from 'react';


import {Platform, Button, Image, SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import AppLoading from 'expo-app-loading';
import styles from '../Estilo';

export default function Foto_perfil( {navigation, route}) {
  
  const [image, setImage] = useState(null);
  const [cod, setCod] = useState(null);
  const [ permission, setHasPermission] = useState();
  const [retorno, setRetorno] = useState()
  const [load, setLoad] = useState()
  const [status, setStatus] = useState({
    type: '',
    mensagem: '',   id: '',token:'',tipotoken:''
  })
  useEffect(() => {
 
    
    (async () => {

        const { status } = await MediaLibrary.requestPermissionsAsync();     
        setHasPermission(status === 'granted');

     
     

      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();


  }, []);

  const pickImage = async () => {
    setCod(route.params?.token);
     setLoad(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  

    if (!result.cancelled) {
        setLoad(false)
        setImage(result.uri);
    }
  };
  confirmar = async () => { 
  
    setLoad(true) 
  let formData = new FormData();
  formData.append('photo', { uri:image, name: image });
  formData.append('codigo', {name:cod });
  await fetch('https://anuncio360.com/projeto/foto_perfil.php', {
     method: 'POST',
     body: formData,
     header: {
     'content-type': 'multipart/form-data',
     },  }  )
   .then((response) => response.json())
   .then((responseJson) => {
  console.log(responseJson)
  setLoad(false)
  //////////////////////
  ////fazer login apartir do uplad///////
console.log('due tudo certo indo para login com Totken')
 
 
   // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
   navigation.navigate('Login', {token:cod})  
     
     
   }).catch(() => {
    setLoad(false)
   

     
   }); 


  
    } 
if( load ){
     return (  <>
         <Topo/>
       

         <View style={{  marginTop:30, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Carregando</Text>
               <View>
      <ActivityIndicator style={styles.container} size={44} color="#121212" />

    </View>

         </View>
       
        </>

     )

} else{ 

  if(image){
return(
   
    <>
    <Topo/>
   

<View style={{ marginTop:30, marginBottom:10, alignItems: 'center', justifyContent: 'center' }}>

    
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
     
    
     


</View>

<View style={{  marginTop:10,   alignItems: 'center', justifyContent: 'center',flexDirection:'row'}} >

     

      <View  >
      <FontAwesome.Button style={styles. button_branco_300}  onPress={confirmar} name="check" size={20}   borderRadius={12} color="#ffffff" backgroundColor="#feffff">
      <Text  style={styles.font_branca} >Confirmar  </Text>
      </FontAwesome.Button>
      </View>
    

 </View> 
 <View style={{ marginTop:10,  alignItems: 'center', justifyContent: 'center',flexDirection:'row'}} >

       

 <View  >
      <FontAwesome.Button style={styles. button_branco_300} onPress={pickImage} rderRadius={12} color="#ffffff" backgroundColor="#feffff">
      <Text  style={styles.font_branca} >Escolher outra Imagem </Text>
      </FontAwesome.Button>
      </View>


  

 </View>        
</>
);

  } else{ 

  return (
  
    <>
     <Topo/>

<View style={{ marginTop:30, marginBottom:10, alignItems: 'center', justifyContent: 'center' }}>
     
<Image 
source ={require('../../asset/avatarR.jpg')}
style={styles.iconlogin2}
/>

</View>

<View style={{  alignItems: 'center', justifyContent: 'center',flexDirection:'row'}} >


<View  >
      <FontAwesome.Button style={styles. button_branco_300} onPress={pickImage} name="check" size={20}   borderRadius={12} color="#ffffff" backgroundColor="#feffff">
      <Text  style={styles.font_branca} >Adicionar Foto  </Text>
      </FontAwesome.Button>
      </View>

     


    

 </View> 
 <View style={{ marginTop:30,  alignItems: 'center', justifyContent: 'center',flexDirection:'row'}} >

     

      <View  >
      <FontAwesome.Button style={styles. button_branco_300} name="sign-out" size={20}   borderRadius={12} color="#ffffff" backgroundColor="#feffff">
      <Text  style={styles.font_branca} >Continuar Sem Imagem  </Text>
      </FontAwesome.Button>
      </View>

 </View>     
</>




    
    
  );
}
}

 function Topo() {
 
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
          
          <FontAwesome.Button onPress={()=>navigation.navigate('Cadastro_usuario')}  name="plus-circle" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
          <Text  style={styles.fonteadicionar} > </Text>
        </FontAwesome.Button>
           </View> 

       </View>

      </>
    ) 
  
  
  }






}