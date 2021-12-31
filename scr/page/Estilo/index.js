import { Dimensions } from 'react-native'
import { Center } from 'native-base';
import {  StyleSheet} from 'react-native';

const cor_botoa='#673ab7e0';
const styles = StyleSheet.create({

    container: {
      flex: 1,
     
    },
    mapa_cadastro :{
        width:500,
        marginTop:30,
       marginLeft:8,
        height:400,
     
},
    
    camera: {
      flex: 1,
      height:600,
    },
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
    marginBottom: 10,
    height:16,
    width:'90%',
    marginLeft:'4%',
  },
  label_login:{  
    fontSize:14,
   textAlign:'center',
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
               borderRadius:2,
               marginLeft:'0%',
               marginTop:'0%',
               color:'#000000', 
               fontSize:16,
               alignItems:'center',
               justifyContent:'center',
                
               borderColor:'#cacdcfcc',
               borderWidth:0,
               backgroundColor:'#ebedef',
                    },
                  
    input_texarea:{
      height:150,
      width: Dimensions.get('window').width/1.03,
      borderRadius:6,
      marginLeft:'1%',
      marginTop:'6%',
      color:'#000000', 
      fontSize:16,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:40, 
      borderColor:'#cacdcfcc',
      borderWidth:1,
      backgroundColor:'#ebedef',
    
                    },   
    buttonContainer: {
      flex: 0.5,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {  
        
      alignItems: 'center',
      justifyContent:'center',
    ///  margin:10,
      height:50,
      width:400,
      },
      button2: {  
        backgroundColor: 'transparent',     
        height:20,
      
        },
      button3: {  
        
        backgroundColor:'#ebedef',    
            height:50,
            width:300,
            alignItems: 'center',
            justifyContent:'center',
            borderColor:'#ebedef',
            
           
          
            },
      button4: {  
        backgroundColor:cor_botoa, 
                height:50,
                width: Dimensions.get('window').width/1,
                alignItems: 'center',
                justifyContent:'center',
                borderColor:'#ebedef',
              
                },
       button5: {     fontFamily:'Ubuntu_700Bold',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:18,
                  color:'#ffffff', 
                  fontWeight:'900',
                  backgroundColor:'#3f51b5',
                  height:50,
                  marginTop:10,
                  width:'100%',
                  alignItems: 'center',
                  justifyContent:'center',
                  borderColor:'#ebedef',
                  color:'#ffffff',
                
                  },  
                  topo_foto1: {
                    width:'20%',
                    marginTop:5,             
                 
                    }, 
                    
                  topo_foto2: {
                      width:'58%',
                      marginTop:5,             
                   
                      },  
   button_foto_Voltar: {  
                  fontFamily:'Ubuntu_700Bold',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:18,
                  color:'#ffffff47', 
                  fontWeight:'900',
                  backgroundColor:'#959ca347', 
                  height:50,
                  margin:5,
                  width:'100%',
                  alignItems: 'center',
                  justifyContent:'center',
                
                
                  },                      
       button_branco_300: {  
        backgroundColor:cor_botoa, 
                  height:50,
                  width: Dimensions.get('window').width/1.4,
                  alignItems: 'center',
                  justifyContent:'center', 
       },

      button_branco_100: {  
      
                    backgroundColor:cor_botoa, 
                    height:50,
                    width: Dimensions.get('window').width/2.199,
                    alignItems: 'center',
                    justifyContent:'center',
                    marginLeft:10,
                   
                  
                    }, 
      font_branca_16: {  
                      fontFamily:'Ubuntu_700Bold',
                      alignItems: 'center',
                      justifyContent:'center',
                      fontSize:16,
                      color:'#ffffff', 
                      fontWeight:'900',
                    
                      },                           
      button_salvar_cadastro: {  
                    backgroundColor:'#0095f6', 
                    height:50,
                    width:'100%',
                    alignItems: 'center',
                    justifyContent:'center',
                    borderColor:'#ebedef',
                   
                  
                    },                      
       font_branca: {  
                  fontFamily:'Ubuntu_700Bold',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:18,
                  color:'#ffffff', 
                  fontWeight:'900',
                
                  },          
      font: {  
                  fontFamily:'Ubuntu_300Light',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:18,
                  color:'#9e9e9e', 
                  fontWeight:'400',
                
                  },
      topo1: {
                    width:'20%',
                    marginTop:'6%',
                    backgroundColor:'#f9f9f914',
                    },
      topo_login: {   alignItems: 'center',
                      justifyContent:'center',
                      width:'100%',
                      marginTop:'4%',
                      backgroundColor:'#f9f9f914',
                     
                      },  
      topo2: {
                      width:'65%',
                       marginTop:'2%',
                       backgroundColor:'#f9f9f914',
                        },
      topo2_login: {     alignItems: 'center',
                          justifyContent:'center',
                          width:'55%',
                           marginTop:'2%',
                           backgroundColor:'#f9f9f914',
                            },            
      topo3: {
                        width:'45%',
                         marginTop:'5%',
                        
                      
                        }  ,
                     
     topo3_login: {
                          width:'15%',
                           marginTop:'5%',
                           alignItems: 'center',
                           justifyContent:'center',
                        
                          }  ,                  
      topo4: {
                          width:'45%',
                           marginTop:'1%',
  
                        
                          }  ,
       topo5: {
                            width:'50%',
                             marginTop:'1%',
    
                          
                            },                      
                    
                    
                    textologo: {
                      fontFamily:'Ubuntu_300Light',                                      
                      justifyContent:'center',
                       marginTop:'10%',
                     fontSize:22,      
                    
                      } 
                    ,
       text_esquerda: {
                      fontFamily:'Ubuntu_300Light',                                      
                    textAlign:'left',
                       marginTop:'10%',
                       marginLeft:'12%',
                     fontSize:18,      
                    
                      } 
                    ,   
                    text_direita: {
                      fontFamily:'Ubuntu_300Light',                                      
                      textAlign:'right',
                       marginTop:'10%',
                     fontSize:14,      
                    
                      } 
                    ,                
     head:{
                     width:50,
                     marginTop:'6%',
                    marginLeft:8,
                     height:50,
                     resizeMode: 'cover',
                    
      },
      icone_imput:{ width:20,
        marginTop:12,
       marginRight:2,
       marginLeft:10,
        height:20,
        resizeMode: 'cover',},

      iconlogin:{
        width:150,
        alignItems: 'center',
        justifyContent:'center',
        height:150,
        resizeMode: 'center',
       
}, 
 iconlogin2:{
        width:250,
        alignItems: 'center',
        justifyContent:'center',
        height:250,
        resizeMode: 'center',
       
}, 
                    fonteadicionar: {  
                      color:'#4630eb', 
                      fontSize:12,
                      fontFamily:'Ubuntu_300Light',
                      
                       
                      
                        },                

  
   
    item: {
      backgroundColor: '#e9e4e4cc',
      padding: 2,
     // marginVertical:11,
      marginHorizontal: 41,
      fontFamily:'Ubuntu_300Light',
                      
    },
    title: {
      fontSize: 22,
      marginLeft:10,
      fontFamily:'Ubuntu_300Light',
                      

    },
    descricao:{
      fontSize: 12,
      marginLeft:10,
      fontFamily:'Ubuntu_300Light',
      marginTop:5,


    },
    quadro: {
      width: '100%',
      height: 'auto',
     
    
      backgroundColor: '#f9f9f914',
      borderColor:'#f1f3f5',
    
    },

    quadro2: {
      width: '100%',
      height:376,
     
    
      backgroundColor: '#f9f9f914',
      borderColor:'#f1f3f5',
    
    },
    image: {
      width: '100%',
      height:310,
     
    },
    image_avatar:{
      borderColor: '#f9f9f914',
      borderRadius:2,
      width:300, 
    
      height:300,
    },

  

  camera: {
    flex: 1,
    height:600,
  },
 font_verde: {  
          fontFamily:'Ubuntu_700Bold', 
          alignItems: 'center',
          justifyContent:'center',
          fontSize:19,
          color:'#009688', 
          fontWeight:'400',
        
          },
 font_Vermelha: {  
            fontFamily:'Ubuntu_300Light',
            alignItems: 'center',
            justifyContent:'center',
            fontSize:19,
            color:'#e91e63', 
            fontWeight:'400',
          
 }
});  


  export default styles;