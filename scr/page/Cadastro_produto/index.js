import React, { useState, useEffect,useRef } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Alert, KeyboardAvoidingView, StatusBar, TouchableOpacity,StyleSheet, Image, TextInput,  View, ScrollView,Select } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { Picker  } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text'

import { RadioButton } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { saveToLibraryAsync } from 'expo-media-library';
import styles from '../Estilo';


export default function Cadastro_produto( {navigation, route}) {

  const [id_anuncio, setId_anuncio] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [titulo,setTitulo]=useState(null);
  const [ categoria,setCategoria]=useState( 'Roupas');
  const [catagoriaselecionada,setCategoriaselecionada]=useState([])
  const [ estado,setEstado]=useState( 'Novo');
  const [estadoselecionado,setEstadoselecionado]=useState([])
  const [value1, setValue1] = useState('Novo');
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      })     
    

   
    const [id_anuciante,setId_anuciante]=useState(route.params?.id_anunciante)
    const [nome,setNome]=useState(null);
    const [descricao,setDescricao]=useState(null);
    const [ preco,setPreco]=useState(null);
   
    var produto={ titulo:titulo, categoria: categoria,estado:estado,preco:preco,descricao:descricao,id_anuciante:id_anuciante}
             
console.log(produto)
              async function  gravar() {  
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

                Alert.alert('Erro tente novamente ')
                
                setStatus({
                  type: 'erro',
                  mensagem: responseJson.messagem
                });
              } else {
              
               /// alert('deu certo');
              // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
               // var ir= navigation.navigate('Cadastro') 
                setStatus({
                  type: 'success',
                  mensagem: responseJson.messagem
                });
                setId_anuncio(responseJson.id_anuncio)
                navigation.navigate('Sobre',{id_anuncio:responseJson.id_anuncio,id_anunciante:route.params?.id_anunciante})
              }
            }).catch(() => {
              setStatus({
                type: 'erro',
                mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
              });
            });
            
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
  <Text style={styles.textologo}>Anuncio360.com</Text>
  </View> 


  < View style={styles.topo3} >
   
   <FontAwesome.Button onPress={()=>  navigation.reset({
            index: 0,
            routes: [{ name: 'Home_logado' }],

          })} name="home" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
   <Text  style={styles.fonteadicionar} > </Text>
 </FontAwesome.Button>
    </View> 

</View>
         
           <KeyboardAvoidingView  style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={90}   >
      <ScrollView>     
   
<TouchableOpacity  style={styles.button} >
      </TouchableOpacity>
      <View>
              <Input
 placeholder="Titulo Anuncio"
   leftIcon={{ type: 'font-awesome', name: 'id-badge' }}   
   style={styles.input}    autoCorrect={false}
   onChangeText={value => setTitulo(value) } />
       </View>


    
       <View  >
  <RadioButton.Group   color='#ffffff'  onValueChange={value => setCategoria(value)} value={categoria}>
        
      <Text style={styles.label}>Categotia</Text>
      <RadioButton.Item   style={styles.button5} label="Roupas" labelStyle={styles.font_branca}  value="Roupas" />
      <RadioButton.Item  style={styles.button5} label="Acessorios de Moda" labelStyle={styles.font_branca}  value="acessorios de Moda" />
      <RadioButton.Item   style={styles.button5} label="Comida" labelStyle={styles.font_branca}  value="Comida" />
      <RadioButton.Item  style={styles.button5} label="Eletrônicos " labelStyle={styles.font_branca}  value="Eletônicos" />
      <RadioButton.Item   style={styles.button5} label="Brinquedos" labelStyle={styles.font_branca}  value="Brinquedos" />
      <RadioButton.Item  style={styles.button5} label="outros" labelStyle={styles.font_branca}  value="outros" />
       </RadioButton.Group>
    
     
</View>
    


<View  >
  <RadioButton.Group   color='#ffffff'  onValueChange={value => setEstado(value)} value={estado}>
        
      <Text style={styles.label}>Estado do Produto{route.params?.id_anunciante}</Text>
      <RadioButton.Item   style={styles.button5} label="Novo" labelStyle={styles.font_branca}  value="Novo" />
      <RadioButton.Item  style={styles.button5} label="Usado" labelStyle={styles.font_branca}  value="Usado" />
    </RadioButton.Group>
    
     
</View>



     <View >
    <Text style={styles.label} leftIcon={{ type: 'font-awesome', name: 'id-badge' }} > Preço</Text>
    <TextInputMask  style={styles.button5}   
  type={'money'}
  options={{
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    suffixUnit: ''
  }}
  value={preco}
  onChangeText={value =>setPreco(value) } 
/>
   

    
     </View>
    
      
   
     <View >
    <Text style={styles.label}>Descrição Anuncio</Text>
    <TextInput multiline={true} style={styles.input_texarea}   placeholder="Fale sobre Produto que você estar anunciando" leftIcon={{ type: 'font-awesome', name: 'archive' }}
     onChangeText={value =>setDescricao(value) } /> 
     </View>


    
     
     <View >

     
      <FontAwesome.Button  onPress={()=> gravar()} style={styles.button_salvar_cadastro} name="save" size={20}    color="#ffffff" backgroundColor="#feffff" >
      <Text  style={styles.font_branca} >Salvar </Text>
      </FontAwesome.Button>

     
      </View>
      </ScrollView>   
      
</KeyboardAvoidingView>
     

      </>    
  


    );
  }
  
         
