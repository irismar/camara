import React, { useState, useEffect,useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, StyleSheet,  TextInput,  View} from 'react-native';

import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { saveToLibraryAsync } from 'expo-media-library';
export default function Produto( {navigation, route}) {
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      })
    
    const [nome,setNome]=useState(null)
    const [sobrenome,setSobrenome]=useState(null)
    
   
    var produto={ nome:nome, sobrenome:sobrenome}
              console.log(produto);
    
              salvar=async () =>{  
        await fetch("https://anuncio360.com/projeto/cadastrar.php", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produto })
          })
            .then((response) => response.json())
            .then((responseJson) => {
             console.log(responseJson)
              if (responseJson.erro) {
                  Alert('deu tudo certo')
                setStatus({
                  type: 'erro',
                  mensagem: responseJson.messagem
                });
              } else {
                  ir_para_foto()
               /// alert('deu certo');
              // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
               // var ir= navigation.navigate('Cadastro') 
                setStatus({
                  type: 'success',
                  mensagem: responseJson.messagem
                });
              }
            }).catch(() => {
              setStatus({
                type: 'erro',
                mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
              });
            });
        }
      

    function ir_para_foto(){
          // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
       navigation.navigate('Sobre',{cod:'989r49ejdfdUI873'})
    }

   

     return (

      
    
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'top' }}>
         
     
    
     <Input  placeholder="Nome Produto" leftIcon={{ type: 'font-awesome', name: 'archive' }}
     onChangeText={value =>setNome(value) } /> 
          <Input  placeholder="Nome Produto" leftIcon={{ type: 'font-awesome', name: 'archive' }}
     onChangeText={value =>setSobrenome(value) } />
     

<Button
  icon={
    <Icon
      name="save"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Salvar"
  onPress ={()=>salvar()}
/>


     
  
      </View>
    
     


    );
  }
  