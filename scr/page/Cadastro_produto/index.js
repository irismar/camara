import React, { useState, useEffect,useRef } from 'react';
import { Button, Text } from 'react-native-elements';
import { Alert, KeyboardAvoidingView, StatusBar, StyleSheet, Image, TextInput,  View, ScrollView,Select } from 'react-native';
import{FontAwesome} from '@expo/vector-icons';
import { Picker  } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text'


import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { saveToLibraryAsync } from 'expo-media-library';



export default function Cadastro_produto( {navigation, route}) {


  const [selectedLanguage, setSelectedLanguage] = useState();
  const [titulo,setTitulo]=useState(null);
  const [ categoria,setCategoria]=useState( ['Escalha uma Categoria','Roupas','Calcados','Acessorios', 'Moda','Comida','Brinquedo']);
  const [catagoriaselecionada,setCategoriaselecionada]=useState([])
  const [ estado,setEstado]=useState( ['Estado Novo ou Usado','Novo','usado']);
  const [estadoselecionado,setEstadoselecionado]=useState([])
  
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      })
     
    

   
    
    const [nome,setNome]=useState(null);
    const [descricao,setDescricao]=useState(null);
    const [ preco,setPreco]=useState(null);
   
    var produto={ titulo:titulo, categoria:catagoriaselecionada,estado:estadoselecionado,preco:preco,descricao:descricao}
             
    
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
            consele.log(status)
        }
      

    function ir_para_foto(){

        navigation.navigate('Sobre',{cod:'989r49ejdfdUI873'})
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
   
   <FontAwesome.Button onPress={()=>navigation.navigate('Home')}  name="home" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
   <Text  style={styles.fonteadicionar} > </Text>
 </FontAwesome.Button>
    </View> 

</View>
         
           <KeyboardAvoidingView  style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={90}   >
      <ScrollView>      
    <View  >
    <Text style={styles.label}>Titudo do Anúncio</Text>
  
    <TextInput style={styles.input}   placeholder="Titulo do Anúncio" leftIcon={{ type: 'font-awesome', name: 'archive' }}
     onChangeText={value =>setTitulo(value) } /> 
     </View>

     <View  >
    
     <Picker style={styles.pik}
  selectedValue={catagoriaselecionada}
  onValueChange={(itemValue) => setCategoriaselecionada(itemValue)}>
   {
     categoria.map ( cr => { return  <Picker.Item label={cr} value={cr} />})
   }
   
  
</Picker>
</View>


<View  >
    
     <Picker style={styles.pik}
  selectedValue={estadoselecionado}
  onValueChange={(itemValue) => setEstadoselecionado(itemValue)}>
   {
     estado.map ( tcr => { return  <Picker.Item label={tcr} value={tcr} />})

   }
   
  
</Picker>
</View>



     <View >
    <Text style={styles.label}>Preço</Text>
    <TextInputMask  style={styles.input}  
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
     <FontAwesome.Button style={styles.salvar}  onPress={()=> gravar()} name="save" color="#009688" backgroundColor="#14151800" >
      <Text  style={styles.font} >Salvar </Text>
      </FontAwesome.Button>
      </View>
      </ScrollView>   
      
</KeyboardAvoidingView>
     

      </>    
  


    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    pik:{
      width:'90%',
      marginLeft:'4%',
      height:150,
      fontSize:14,
    },
    label:{  
    fontSize:14,
    marginTop: 10,
    marginBottom: -10,
    height:16,
    width:'90%',
    marginLeft:'4%',
  },

    salvar:{
     
      alignItems:'center',
      justifyContent:'center',
      color:'#196fe1',
      backgroundColor:'#14151800',

    },  
    font: {  
                  fontFamily:'Ubuntu_300Light',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:22,
                  color:'#3f51b5', 
                  fontWeight:'400',
                  padding:5,
                
     },
        input: {
               height:50,
               width:'90%',
               borderRadius:6,
               marginLeft:'4%',
               marginTop:'6%',
               color:'#000000', 
               fontSize:16,
               alignItems:'center',
               justifyContent:'center',
                
               borderColor:'#cacdcfcc',
               borderWidth:1,
               backgroundColor:'#ebedef',
                    },
                  
    input_texarea:{
      height:150,
      width:'90%',
      borderRadius:6,
      marginLeft:'4%',
      marginTop:'6%',
      color:'#000000', 
      fontSize:16,
      alignItems:'center',
      justifyContent:'center',
       
      borderColor:'#cacdcfcc',
      borderWidth:1,
      backgroundColor:'#ebedef',
    
                    },      
    topo3: {
    width:'45%',
    marginTop:'6%',
     }  
            
                    ,
                    textologo: {
                      fontFamily:'Ubuntu_300Light',
                     flexDirection: 'row', 
                       marginTop:'10%',
                     fontSize:22,
                     textAlign: 'left',
                     marginLeft:'-2%',
                      } 
                    ,
                    
                    head:{
                     width:50,
                     marginTop:'6%',
                     marginLeft:10,  
                     height:50,
                    },
                    fonteadicionar: {  
                      color:'#4630eb', 
                      fontSize:12,
                      
                       
                      
                        },  
                       
                          topo1: {
                            width:'20%',
                             marginTop:'6%',
                          
                            },
                            topo2: {
                              width:'65%',
                               marginTop:'6%',
                            
                              },
                          
                              topo3: {
                                width:'45%',
                                 marginTop:'6%',
                              
                                }  
                            
                            ,
                            textologo: {
                              fontFamily:'Ubuntu_300Light',
                             flexDirection: 'row', 
                               marginTop:'10%',
                             fontSize:22,
                             textAlign: 'left',
                             marginLeft:'-2%',
                              } 
                            ,
                            
                            head:{
                             width:50,
                             marginTop:'6%',
                             marginLeft:10,  
                             height:50,
                            },
                            fonteadicionar: {  
                              color:'#4630eb', 
                              fontSize:12,
                              
                               
                              
                                },                
  });
  
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