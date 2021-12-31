import React, { useState, useEffect,useRef } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { ActivityIndicator, Alert, KeyboardAvoidingView, StatusBar, StyleSheet, Image,TouchableOpacity, Text,   View, ScrollView,Select } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';   
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text'
import { TextInput } from 'react-native-paper';

import styles from '../Estilo';

export default function Cadastro_usuario( {navigation, route}) {
  const [senha, setSenha] = useState();
  const [nome_usuario,setNome_usuario]=useState(null);
  const [ categoria,setCategoria]=useState( ['Escalha uma Categoria','Roupas','Calcados','Acessorios', 'Moda','Comida','Brinquedo']);
  const [tipo_anuncio_selecionado,setTipo_anuncio_selecionado]=useState([])
  const [status, setStatus] = useState({
            type: '',
        mensagem: '', 
        token: ''
  }) 
  const [token, setToken] = useState()   
    
    const [load,setLoad]=useState();
    const [telefone,setTelefone]=useState(null);
    const [endereco,setEndereco]=useState(null);
    const [long,setLong]=useState();
    const [lat,setLat]=useState();
    useEffect(() => {
      setLoad(false)
      async function localiza  ()  {
        var latit= await AsyncStorage.getItem('LATITUDE')
        if(latit){ setLat(latit)}
        var long= await AsyncStorage.getItem('LONGITUDE')
        if(long){ setLong(long)}   }    
      ///////localiza()/////  
  
     //// token   () 
    }, []);

    

   var tipo_anuncio=route.params?.tipo_anuncio
   


    
    var cadastro_usuario={ nome_usuario:nome_usuario,senha:senha,tipo_negocio:tipo_anuncio,endereco:endereco,telefone:telefone,latitude:lat,longitude:long}
           
    
    async function   salvar ()  {   
      setLoad(true)
await fetch("https://anuncio360.com/projeto/cadastro_usuario.php", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ cadastro_usuario })
})
  .then((response) => response.json())
  .then((responseJson) => {
   console.log(responseJson)
    if (responseJson.erro) {

    alert('Erro tente novamente ')
      
      setStatus({
        type: 'erro',
        mensagem: responseJson.messagem
      });
    } else {
      setToken(responseJson.token )
   
      setStatus({ type: 'success', 
       mensagem: responseJson.messagem
       ,token:responseJson.token});


       navigation.navigate('Foto_perfil', {token:responseJson.token,nome_usuario:nome_usuario})


   }
  }).catch(() => {
    setLoad(false)
    setStatus({
      type: 'erro',
      mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
    });
  });
  
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
}


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
<SafeAreaView style={styles.container}>
<KeyboardAvoidingView  style={styles.container}
       keyboardVerticalOffset={10} behavior={Platform.OS === "ios" ? "padding" : "height"}  >
      <ScrollView keyboardShouldPersistTaps={'handled'}>      
 
     

<View>
<TouchableOpacity  style={styles.button} >
      </TouchableOpacity>
      <View>
              <Input
 placeholder="Nome da Sua Marca ou Negocio"
   leftIcon={{ type: 'font-awesome', name: 'id-badge' }}   
   style={styles.input}    autoCorrect={false}
   onChangeText={value => setNome_usuario(value) } />

              
              </View>

              <View  >



              <Input
   placeholder="Crie Senha Acesso"
   leftIcon={{ type: 'font-awesome', name: 'lock' }}  secureTextEntry={true}   textContentType="password"
   style={styles.input}     autoCorrect={false}
   onChangeText={value =>setSenha(value) } />

                
              </View>


      
      
</View>
<View>
     
</View>



    


 
 
   
 <View style={{flexDirection:'row', marginBottom:30}} >
      <Image
   source ={require('../../asset/icone_zap.png')}
   style={styles.icone_imput}
  />
      <TextInputMask
  type={'cel-phone'}
  placeholder="Telefone  whatsapp"
  style={styles.input}  
  options={{
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99) '
  }}
  leftIcon={{ type: 'font-awesome', name: 'whatsapp' }}
  value={telefone}
  onChangeText={value =>setTelefone(value)}
/>
     
</View>


<View style={{flexDirection:'row'}} >
      <Image
   source ={require('../../asset/icone_mapa.png')}
   style={styles.icone_imput}
  />

<GooglePlacesAutocomplete   styles={{ width:350, }} 
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details.formatted_address);
        setLat(details.geometry.location.lat)
        setLong(details.geometry.location.lng)
        setEndereco(details.formatted_address)
       
      }}
      query={{
        key: 'AIzaSyBTCJwwUlXn00DQX19Tr89S6hfEERGxaNg',
        language: 'pt-br',
      }}
      placeholder = 'Digite Endereço' 
      enablePoweredByContainer={false}
      fetchDetails = { true }

     
      
      
    />
  </View>


<Text  style={styles.font} >  Anuncio Selecionado {route.params?.tipo_anuncio}</Text>
         <View >
     <FontAwesome.Button style={styles.salvar}   backgroundColor="#14151800" >
    
      </FontAwesome.Button>
      </View>


      <View >
      <TouchableOpacity  style={styles.button4}  >

<Text onPress={() => salvar()} style={styles.font_branca} > Salvar </Text> 
</TouchableOpacity>
     
      </View>
   

      </ScrollView>   
      
</KeyboardAvoidingView>
     </SafeAreaView>

      </>    
  


    );
  }
  
''