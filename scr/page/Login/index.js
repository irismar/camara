import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, KeyboardAvoidingView, ActivityIndicator, StatusBar, StyleSheet, Image, TextInput, View, ScrollView, Select, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Estilo';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation, route }) {
  const [cod,  setCod]=useState()
  const [loadin, setLoadin] = useState();
  const [data, setData] = useState();
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const [status, setStatus] = useState({
    type: '',
    mensagem: '',   id: '',token:'',tipotoken:''
  })
  


  const [estados, setEstados] = useState([]);

console.log(usuario,senha)

useEffect(() => {

      
    
  localizar_token()


 //// token   () 
}, []);
  
async  function  localizar_token(){
 var token=route.params?.token;
 if(token){
console.log(token)

//////////////////////////godigo de acesso com token////////
await fetch("https://anuncio360.com/projeto/login.php?token="+token)
///  fetch('https://anuncio360.com/projeto/login.php?senha=123&&user=%20admin')
.then((response) => response.json())
.then((responseJson) => {
  console.log(responseJson)
   if (responseJson.erro) {
    setLoadin(false)
    // Alert.alert('Erro tente novamente ')
     
   setStatus({
       type: 'erro',
       mensagem: responseJson.messagem
     });
   } else {
  setLoadin(false)
  setStatus({  mensagem: responseJson.messagem, id: responseJson.id, });
  var nome_get= responseJson.usuario //Alert.alert(status)
  var id_get= responseJson.id 
  var token_get= responseJson.token//Alert.alert(status)
  var avatar= responseJson.Foto_perfil//Alert.alert(status)
  var tipo_negocio= responseJson.tipo_negocio//Alert.alert(status)
  console.log(token_get);
  AsyncStorage.setItem('TOKEN',  token_get)
  AsyncStorage.setItem('NOME',  nome_get)
  AsyncStorage.setItem('ID',  id_get)
  AsyncStorage.setItem('AVATAR',avatar)
  AsyncStorage.setItem('TIPO_NOGOCIO', tipo_negocio)
  if(tipo_negocio==='Automoveis'){

    navigation.navigate('Automoveis', {token:token_get})  
   }
 
   if(tipo_negocio==='Produto'){
 
     navigation.navigate('Cadastro_produto', {token:token_get}) 
   }
   if(tipo_negocio==='Locais'){
 
     navigation.navigate('Local', {token:token_get}) 
   }
 
  ///navigation.navigate('Login', {token:cod})  
  // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
     
   }
 }).catch(() => {
   setLoadin(false)
   setStatus({
     type: 'erro',
     mensagem: 'Erro Verifique usuario e Senha!'
   });
 });


/////////////////////fim codigo acesso token////////////////

 }


}





async  function  entrar(){
 

setLoadin(true)
    
   await fetch("https://anuncio360.com/projeto/login.php?senha="+senha+"&&user="+usuario)
  ///  fetch('https://anuncio360.com/projeto/login.php?senha=123&&user=%20admin')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
     if (responseJson.erro) {
      setLoadin(false)
      // Alert.alert('Erro tente novamente ')
       
     setStatus({
         type: 'erro',
         mensagem: responseJson.messagem
       });
     } else {
          setLoadin(false)
      setStatus({  mensagem: responseJson.messagem, id: responseJson.id, });
      var nome_get= responseJson.usuario //Alert.alert(status)
  var id_get= responseJson.id 
  var token_get= responseJson.token//Alert.alert(status)
  var avatar= responseJson.Foto_perfil//Alert.alert(status)
  var tipo_negocio= responseJson.tipo_negocio//Alert.alert(status)
  console.log(token_get);
  AsyncStorage.setItem('TOKEN',  token_get)
  AsyncStorage.setItem('NOME',  nome_get)
  AsyncStorage.setItem('ID',  id_get)
  AsyncStorage.setItem('AVATAR',avatar)
  AsyncStorage.setItem('TIPO_NOGOCIO', tipo_negocio)
  if(tipo_negocio==='Automoveis'){

   navigation.navigate('Automoveis', {token:token_get})  
  }

  if(tipo_negocio==='Produto'){

    navigation.navigate('Cadastro_produto', {token:token_get}) 
  }
  if(tipo_negocio==='Local'){

    navigation.navigate('Local', {token:token_get}) 
  }

  ///navigation.navigate('Login', {token:cod})  
  // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
     
   }
 }).catch(() => {
   setLoadin(false)
   setStatus({
     type: 'erro',
     mensagem: 'Erro Verifique usuario e Senha!'
   });
 });

  
  ///var { ler } = xtz.dados.map(
   /// function (item) {

  ///  var id = item.id
  ///  var nome = item.usuario
 ///   alert(id, nome)

  ///})/
       

  




   
  }

 


    return (


      <>
       <Topo/>


        <StatusBar backgroundColor="#000" translucent={true} />
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={3}   >

          <ScrollView>

            <View style={styles.container}>
              <View style={styles.topo_login} >
                <Image
                  source={require('../../asset/logo_login.png')}
                  style={styles.iconlogin}
                />
                <Text style={styles.textologo}>{ status.mensagem ? status.mensagem:'Anuncio360.com'  }</Text>
              </View>




              <View>
              <Input
   placeholder="Usuario"
   leftIcon={{ type: 'font-awesome', name: 'id-badge' }}   
   style={styles.input}    autoCorrect={false}
   onChangeText={value => setUsuario(value) } />

              
              </View>

              <View  >



              <Input
   placeholder="Senha"
   leftIcon={{ type: 'font-awesome', name: 'lock' }}  secureTextEntry={true}   textContentType="password"
   style={styles.input}     autoCorrect={false}
   onChangeText={value =>setSenha(value) } />

                
              </View>



              <TouchableOpacity style={styles.button4} >

                <Text onPress={() => entrar()} style={styles.font_branca} > Entrar </Text> 
              </TouchableOpacity>

              <View style={{ flexDirection: 'row' }} >
                <View style={styles.topo4} >
                  <TouchableOpacity   >

                    <Text onPress={() =>  navigation.reset({
                index: 0,
                routes: [{ name: 'Cadastro' }],
              })} 
                     style={styles.text_esquerda} >Cadastrar  </Text>
                  </TouchableOpacity>


                </View>


                <View style={styles.topo4} >
                  <TouchableOpacity   >

                    <Text style={styles.text_direita} >Esquecir Senha </Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>

          </ScrollView>

        </KeyboardAvoidingView>


      </>



    );
  



  function FooterList(loadin) {
    if (!loadin) return null
    return (
      <View>
        <ActivityIndicator style={styles.container} size={22} color="#121212" />

      </View>

    )
  }



  

 function Topo() {
 
  

 
   
  return (
    

    <>
     <StatusBar backgroundColor="#000" translucent={true} />
     <View style={{flexDirection:'row'}} >

     <View style={styles.topo1} >
     <FontAwesome.Button onPress={()=>navigation.navigate('Home')  }  name="arrow-left" margin='2%' size={19} color="#42555e" backgroundColor="#9e9e9e00" >
  
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


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
