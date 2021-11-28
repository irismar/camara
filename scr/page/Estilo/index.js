
import {  StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({


 
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
      height:600,
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
      margin:10,
      height:50,
      width:400,
      },
      button2: {  
        backgroundColor: 'transparent',     
        height:20,
      
        },
        button3: {  
          color:'#4630eb', 
           backgroundColor:'#9e9e9e1c',
            height:50,
            width:300,
            alignItems: 'center',
            justifyContent:'center',
          
            },
            button4: {  
                backgroundColor:'#3f51b5', 
                height:50,
                width:300,
                alignItems: 'center',
                justifyContent:'center',
              
                },
                font: {  
                  fontFamily:'Ubuntu_300Light',
                  alignItems: 'center',
                  justifyContent:'center',
                  fontSize:22,
                  color:'#3f51b5', 
                  fontWeight:'400',
                
                  },
                  topo1: {
                    width:'20%',
                    marginTop:'6%',
                    backgroundColor:'#f9f9f914',
                    },
                    topo2: {
                      width:'65%',
                       marginTop:'2%',
                       backgroundColor:'#f9f9f914',
                        },
                  
                      topo3: {
                        width:'45%',
                         marginTop:'1%',

                      
                        }  ,
                        topo4: {
                          width:'45%',
                           marginTop:'1%',
  
                        
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
                    marginLeft:8,
                     height:40,
                     resizeMode: 'cover',
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
      height: 560,
     
    
      backgroundColor: '#f9f9f914',
      borderColor:'#f1f3f5',
    
    },

    quadro2: {
      width: '100%',
      height: 421,
     
    
      backgroundColor: '#f9f9f914',
      borderColor:'#f1f3f5',
    
    },
    image: {
      width: '100%',
     height: 300,
     
     
     
     
    },
  });

  export default styles;