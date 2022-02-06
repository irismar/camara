import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View,Alert,  SafeAreaView ,TouchableOpacity,Modal,Image, ListViewBase} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import{FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DeviceMotion } from 'expo-sensors';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { ActivityIndicator } from 'react-native-paper';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';



import styles from '../Estilo';
export default function Sobre ( {route, navigation}) {
const [image, setImage] = useState(null);
const [id_anunciante,setId_anunciante]=useState(route.params?.id_anunciante)
const [id_anuncio,setId_anuncio]=useState(route.params?.id_anuncio)
const [foto_processo,setFoto_processo]=useState(0)
const [load,setLoad]=useState(false)
const [captura, setCapitura]=useState(false)
const [janela, setJanela]=useState(false)
const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);
const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [status, requestPermission] = MediaLibrary.usePermissions();
const [hasPermission, setHasPermission] = useState(null);
const [type, setType] = useState(
    Camera.Constants.Type.back,
    Camera.Constants.WhiteBalance.auto,
    Camera.Constants.VideoStabilization.auto,    

    );
  const asset=useState(0);  
  const camRef=useRef(null);
  const [zip ,setZip]=useState()
  const [capturedPhoto, setCapturedPhoto]=useState(null);
  const [open, setOpen]=useState(false)
  const [data, setData] = useState({    t: 0,    y: 0,    z: 0,  });
  const [subscription, setSubscription] = useState(null);
  const [fotos, setFotos] = useState(0);
  const [grau, setGrau] = useState(null);
  const [grau360, setGrau360] = useState(0);
  const [angulo360, setAngulo360]=useState(0);  
  const _subscribe = () => {
 setSubscription(     
    DeviceMotion .addListener(({ rotation }) => {   
    // Gyroscope.addListener(gyroscopeData => {
    setData(rotation);     
           })    );  };
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);  };
  useEffect(() => {
    DeviceMotion .addListener(({ rotation }) => {   
      // Gyroscope.addListener(gyroscopeData => {
         setData(rotation);     
            }) 
  }, []);
 /////////////////////////////

 ////////////////////////////
  const { alpha } =data;
  var angulo;
  angulo=roundToTwo(alpha);
  angulo= roundToTwo(((angulo+4.01-0.)*57)-49);
  //angulo= numero_inteiro(angulo);
 // console.log (data) ;
 
  useEffect(() => {  
    (async () => {  
      const { status } = await Camera.requestCameraPermissionsAsync();
     
      setHasPermission(status === 'granted');
    })
     ();


     (async () => {  
      const { status } = await MediaLibrary.requestPermissionsAsync();
     
      setHasPermission(status === 'granted');
    })
     ();

  }, []);
  


  

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
 
  
  
  //console.log(location);
  async function takePicture(data) {
  if(camRef){    
    const data=await camRef.current.takePictureAsync();
   
    
    setCapturedPhoto(data.uri); 
    
    const file = data.uri;
   
    
    ///const //asset= await MediaLibrary.createAssetAsync(data.uri);  
   redimencionar(data.uri)
   salvar_foto() 
    /////uploadImage();
   
  }  };


  async function redimencionar(data){

    const manipResult = await manipulateAsync(
      data,
      [
        { rotate: 0 },
        { resize :{ height: 600, width: 600}  },
      ],
      { compress: 1, format: SaveFormat.JPEG  }
    );
    setImage(manipResult.uri);
    
    console.log(image);
  };  

  async function salvar_foto  ()  { 

    if(fotos==1){ await AsyncStorage.setItem('FOTO_SALVAR_1', image)}
    if(fotos==2){ await AsyncStorage.setItem('FOTO_SALVAR_2', image)}
    if(fotos==3){ await AsyncStorage.setItem('FOTO_SALVAR_3', image)}
    if(fotos==4){ await AsyncStorage.setItem('FOTO_SALVAR_4', image)}
    if(fotos==5){ await AsyncStorage.setItem('FOTO_SALVAR_5', image)}
    if(fotos==6){ await AsyncStorage.setItem('FOTO_SALVAR_6', image)}
    if(fotos==7){ await AsyncStorage.setItem('FOTO_SALVAR_7', image)}
    if(fotos==8){ await AsyncStorage.setItem('FOTO_SALVAR_8', image)}
    if(fotos==9){ await AsyncStorage.setItem('FOTO_SALVAR_9', image)}
    if(fotos==10){ await AsyncStorage.setItem('FOTO_SALVAR_10', image)}
    if(fotos==11){ await AsyncStorage.setItem('FOTO_SALVAR_11', image)}
    if(fotos==12){ await AsyncStorage.setItem('FOTO_SALVAR_12', image)}
    if(fotos==13){ await AsyncStorage.setItem('FOTO_SALVAR_13', image)}
    if(fotos==14){ await AsyncStorage.setItem('FOTO_SALVAR_14', image)}
    if(fotos==15){ await AsyncStorage.setItem('FOTO_SALVAR_15', image)}
    if(fotos==16){ await AsyncStorage.setItem('FOTO_SALVAR_16', image)}
    if(fotos==17){ await AsyncStorage.setItem('FOTO_SALVAR_17', image)}
    if(fotos==18){ await AsyncStorage.setItem('FOTO_SALVAR_18', image)}
    if(fotos==19){ await AsyncStorage.setItem('FOTO_SALVAR_19', image)}
    if(fotos==20){ await AsyncStorage.setItem('FOTO_SALVAR_20', image)}  
    if(fotos==21){ await AsyncStorage.setItem('FOTO_SALVAR_21', image)}
    if(fotos==22){ await AsyncStorage.setItem('FOTO_SALVAR_22', image)}
    if(fotos==23){ await AsyncStorage.setItem('FOTO_SALVAR_23', image)}
    if(fotos==24){ await AsyncStorage.setItem('FOTO_SALVAR_24', image)}
    if(fotos==25){ await AsyncStorage.setItem('FOTO_SALVAR_25', image)}
    if(fotos==26){ await AsyncStorage.setItem('FOTO_SALVAR_26', image)}
    if(fotos==27){ await AsyncStorage.setItem('FOTO_SALVAR_27', image)}
    if(fotos==28){ await AsyncStorage.setItem('FOTO_SALVAR_28', image)}
    if(fotos==29){ await AsyncStorage.setItem('FOTO_SALVAR_29', image)}
    if(fotos==30){ await AsyncStorage.setItem('FOTO_SALVAR_30', image)}
    if(fotos==31){ await AsyncStorage.setItem('FOTO_SALVAR_31', image)}
    if(fotos==32){ await AsyncStorage.setItem('FOTO_SALVAR_32', image)}
    if(fotos==33){ await AsyncStorage.setItem('FOTO_SALVAR_33', image)}
    if(fotos==34){ await AsyncStorage.setItem('FOTO_SALVAR_34', image)}
    if(fotos==35){ await AsyncStorage.setItem('FOTO_SALVAR_35', image)}
    if(fotos==36){ await AsyncStorage.setItem('FOTO_SALVAR_36', image)}
    if(fotos==37){ await AsyncStorage.setItem('FOTO_SALVAR_37', image)}
    if(fotos==38){ await AsyncStorage.setItem('FOTO_SALVAR_38', image)}
    if(fotos==39){ await AsyncStorage.setItem('FOTO_SALVAR_39', image)}
    if(fotos==40){ await AsyncStorage.setItem('FOTO_SALVAR_40', image)}
    if(fotos==41){ await AsyncStorage.setItem('FOTO_SALVAR_41', image)}
    if(fotos==42){ await AsyncStorage.setItem('FOTO_SALVAR_42', image)}
    if(fotos==43){ await AsyncStorage.setItem('FOTO_SALVAR_43', image)}
    if(fotos==44){ await AsyncStorage.setItem('FOTO_SALVAR_44', image)}
    if(fotos==45){ await AsyncStorage.setItem('FOTO_SALVAR_45', image)}
    if(fotos==46){ await AsyncStorage.setItem('FOTO_SALVAR_46', image)}
    if(fotos==47){ await AsyncStorage.setItem('FOTO_SALVAR_47', image)}
    if(fotos==48){ await AsyncStorage.setItem('FOTO_SALVAR_48', image)}
    if(fotos==49){ await AsyncStorage.setItem('FOTO_SALVAR_49', image)}
    if(fotos==50){ await AsyncStorage.setItem('FOTO_SALVAR_50', image)}
    if(fotos==51){ await AsyncStorage.setItem('FOTO_SALVAR_51', image)}
    if(fotos==52){ await AsyncStorage.setItem('FOTO_SALVAR_52', image)}
    if(fotos==53){ await AsyncStorage.setItem('FOTO_SALVAR_53', image)}
    if(fotos==54){ await AsyncStorage.setItem('FOTO_SALVAR_54', image)}
    if(fotos==55){ await AsyncStorage.setItem('FOTO_SALVAR_55', image)}
    if(fotos==56){ await AsyncStorage.setItem('FOTO_SALVAR_56', image)}
    if(fotos==57){ await AsyncStorage.setItem('FOTO_SALVAR_57', image)}
    if(fotos==58){ await AsyncStorage.setItem('FOTO_SALVAR_58', image)}
    if(fotos==59){ await AsyncStorage.setItem('FOTO_SALVAR_59', image)}
    if(fotos==60){ await AsyncStorage.setItem('FOTO_SALVAR_60', image)}
    if(fotos==61){ await AsyncStorage.setItem('FOTO_SALVAR_61', image)}
    if(fotos==62){ await AsyncStorage.setItem('FOTO_SALVAR_62', image)}
    if(fotos==63){ await AsyncStorage.setItem('FOTO_SALVAR_63', image)}
    if(fotos==64){ await AsyncStorage.setItem('FOTO_SALVAR_64', image)}
    if(fotos==65){ await AsyncStorage.setItem('FOTO_SALVAR_65', image)}
    if(fotos==66){ await AsyncStorage.setItem('FOTO_SALVAR_66', image)}
    if(fotos==67){ await AsyncStorage.setItem('FOTO_SALVAR_67', image)}
    if(fotos==68){ await AsyncStorage.setItem('FOTO_SALVAR_68', image)}
    if(fotos==69){ await AsyncStorage.setItem('FOTO_SALVAR_69', image)}
    if(fotos==70){ await AsyncStorage.setItem('FOTO_SALVAR_70', image);
    enviar_fotos_para_server();
  
  }  }
    
  async function  enviar_fotos_para_server (){
  
    setJanela(true)  
  setLoad(true)
  setFoto_processo(1)
  }
  
  




    if(foto_processo==1){ 
  async function  vai_1 (){
      var foto_salvar_1=await AsyncStorage.getItem('FOTO_SALVAR_1');       
      if(foto_salvar_1){   
  enviar(foto_salvar_1,1) 
                    await AsyncStorage.removeItem('FOTO_SALVAR_1');  }  
console.log(foto_processo);
                  
                  }  
                 vai_1();     }
    //////////////////////////////////////////////////////////////
  
    if(foto_processo==2){ 
      async function  vai_2 (){
          var foto_salvar_2=await AsyncStorage.getItem('FOTO_SALVAR_2');       
          if(foto_salvar_2){   
      enviar(foto_salvar_2,2) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_2');  }  console.log(foto_processo);}  
                     vai_2();     }
        //////////////////////////////////////////////////////////////
  
  if(foto_processo==3){ 
  async function  vai_3 (){
      var foto_salvar_3=await AsyncStorage.getItem('FOTO_SALVAR_3');       
      if(foto_salvar_3){   
  enviar(foto_salvar_3,3) 
                    await AsyncStorage.removeItem('FOTO_SALVAR_3');  }   console.log(foto_processo);       }  
                 vai_3();     }
    //////////////////////////////////////////////////////////////  
  if(foto_processo==4){ 
      async function  vai_4 () {
          var foto_salvar_4=await AsyncStorage.getItem('FOTO_SALVAR_4');       
          if(foto_salvar_4){   
      enviar(foto_salvar_4,4) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_4');  }   console.log(foto_processo);         }  
                     vai_4();  }
        //////////////////////////////////////////////////////////////
  if(foto_processo==5){ 
      async function  vai_5 (){
          var foto_salvar_5=await AsyncStorage.getItem('FOTO_SALVAR_5');       
          if(foto_salvar_5){   
      enviar(foto_salvar_5,5) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_5');  }  console.log(foto_processo)       }  
                     vai_5();     }
        //////////////////////////////////////////////////////////////                   
  if(foto_processo==6){ 
      async function  vai_6 (){
          var foto_salvar_6 =await AsyncStorage.getItem('FOTO_SALVAR_6');       
          if(foto_salvar_6){   
      enviar(foto_salvar_6,6) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_6');  }   console.log(foto_processo)         }  
                     vai_6();     }
 if(foto_processo==7){ 
      async function  vai_7 (){
          var foto_salvar_7 =await AsyncStorage.getItem('FOTO_SALVAR_7');       
          if(foto_salvar_7){   
      enviar(foto_salvar_7,7) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_7');  }      }  
                     vai_7();     }
 if(foto_processo==8){ 
      async function  vai_8 (){
          var foto_salvar_8 =await AsyncStorage.getItem('FOTO_SALVAR_8');       
          if(foto_salvar_8){   
      enviar(foto_salvar_8,8) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_8');  }      }  
                     vai_8();     }
 if(foto_processo==9){ 
      async function  vai_9 (){
          var foto_salvar_9 =await AsyncStorage.getItem('FOTO_SALVAR_9');       
          if(foto_salvar_9){   
      enviar(foto_salvar_9,9) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_9');  }      }  
                     vai_9();     }
 if(foto_processo==10){ 
      async function  vai_10 (){
         var foto_salvar_10 =await AsyncStorage.getItem('FOTO_SALVAR_10');       
          if(foto_salvar_10){   
      enviar(foto_salvar_10,10) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_10');  }      }  
                     vai_10();     }
 if(foto_processo==11){ 
      async function  vai_11 (){
          var foto_salvar_11 =await AsyncStorage.getItem('FOTO_SALVAR_11');       
          if(foto_salvar_11){   
      enviar(foto_salvar_11,11) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_11');  }      }  
                     vai_11();     }    
 if(foto_processo==12){ 
      async function  vai_12 (){
          var foto_salvar_12 =await AsyncStorage.getItem('FOTO_SALVAR_12');       
          if(foto_salvar_12){   
      enviar(foto_salvar_12,12) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_12');  }      }  
                     vai_12();     } 
      ///////////////////////////13//////////////////////////////////////               
                      if(foto_processo==13){ 
      async function  vai_13 (){
          var foto_salvar_13 =await AsyncStorage.getItem('FOTO_SALVAR_13');       
          if(foto_salvar_13){   
      enviar(foto_salvar_13,13) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_13');  }      }  
                     vai_13();     } 
      /////////////////////////14////////////////////////////////////////                
                      if(foto_processo==14){ 
      async function  vai_14 (){
          var foto_salvar_14 =await AsyncStorage.getItem('FOTO_SALVAR_14');       
          if(foto_salvar_14){   
      enviar(foto_salvar_14,14) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_14');  }      }  
                     vai_14();     } 
       ///////////////////////15////////////////////////////////////////              
                      if(foto_processo==15){ 
      async function  vai_15 (){
          var foto_salvar_15 =await AsyncStorage.getItem('FOTO_SALVAR_15');       
          if(foto_salvar_15){   
      enviar(foto_salvar_15,15) 
                            await AsyncStorage.removeItem('FOTO_SALVAR_15'); }}  
                     vai_15();     }
       ////////////////////////16///////////////////////////////////////              
                       if(foto_processo==16){ 
      async function  vai_16 (){
          var foto_salvar_16 =await AsyncStorage.getItem('FOTO_SALVAR_16');       
          if(foto_salvar_16){   
      enviar(foto_salvar_16,16) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_16');  }      }  
                     vai_16();     } 
                      if(foto_processo==17){ 
      async function  vai_17 (){
          var foto_salvar_17 =await AsyncStorage.getItem('FOTO_SALVAR_17');       
          if(foto_salvar_17){   
      enviar(foto_salvar_17,17) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_17');  }      }  
                     vai_17();     }

                       if(foto_processo==18){ 
      async function  vai_18 (){
          var foto_salvar_18 =await AsyncStorage.getItem('FOTO_SALVAR_18');       
          if(foto_salvar_18){   
      enviar(foto_salvar_18,18) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_18');  }      }  
                     vai_18();     } 
                     
                     if(foto_processo==19){ 
                     async function  vai_19 (){
          var foto_salvar_19 =await AsyncStorage.getItem('FOTO_SALVAR_19');       
          if(foto_salvar_19){   
      enviar(foto_salvar_19,19) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_19');  }      }  
                     vai_19();     }                                                            
    /////////////////
             if(foto_processo==20){ 
                     async function  vai_20 (){
          var foto_salvar_20 =await AsyncStorage.getItem('FOTO_SALVAR_20');       
          if(foto_salvar_20){   
      enviar(foto_salvar_20,20) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_20');  }      }  
                     vai_20();     }    
    ////////////////           
    /////////////////
             if(foto_processo==21){ 
                     async function  vai_21 (){
          var foto_salvar_21 =await AsyncStorage.getItem('FOTO_SALVAR_21');       
          if(foto_salvar_21){   
      enviar(foto_salvar_21,21) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_21');  }      }  
                     vai_21();     }    
    //////////////// 
 /////////////////
             if(foto_processo==22){ 
                     async function  vai_22 (){
          var foto_salvar_22 =await AsyncStorage.getItem('FOTO_SALVAR_22');       
          if(foto_salvar_22){   
      enviar(foto_salvar_22,22) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_22');  }      }  
                     vai_22();     }    
    ////////////////          /////////////////
             if(foto_processo==23){ 
                     async function  vai_23 (){
          var foto_salvar_23 =await AsyncStorage.getItem('FOTO_SALVAR_23');       
          if(foto_salvar_23){   
      enviar(foto_salvar_23,23) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_23');  }      }  
                     vai_23();     }    
    ////////////////          /////////////////
             if(foto_processo==24){ 
                     async function  vai_24 (){
          var foto_salvar_24 =await AsyncStorage.getItem('FOTO_SALVAR_24');       
          if(foto_salvar_24){   
      enviar(foto_salvar_24,24) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_24');  }      }  
                     vai_24();     }    
    ////////////////          /////////////////
             if(foto_processo==25){ 
                     async function  vai_25 (){
          var foto_salvar_25 =await AsyncStorage.getItem('FOTO_SALVAR_25');       
          if(foto_salvar_25){   
      enviar(foto_salvar_25,25) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_25');  }      }  
                     vai_25();     }    
    ////////////////          /////////////////
             if(foto_processo==26){ 
                     async function  vai_26 (){
          var foto_salvar_26 =await AsyncStorage.getItem('FOTO_SALVAR_26');       
          if(foto_salvar_26){   
      enviar(foto_salvar_26,26) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_26');  }      }  
                     vai_26();     }    
    ////////////////          /////////////////
             if(foto_processo==27){ 
                     async function  vai_27 (){
          var foto_salvar_27 =await AsyncStorage.getItem('FOTO_SALVAR_27');       
          if(foto_salvar_27){   
      enviar(foto_salvar_27,27) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_27');  }      }  
                     vai_27();     }    
    ////////////////          /////////////////
             if(foto_processo==28){ 
                     async function  vai_28 (){
          var foto_salvar_28 =await AsyncStorage.getItem('FOTO_SALVAR_28');       
          if(foto_salvar_28){   
      enviar(foto_salvar_28,28) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_28');  }      }  
                     vai_28();     }    
    ////////////////          /////////////////
             if(foto_processo==29){ 
                     async function  vai_29 (){
          var foto_salvar_29 =await AsyncStorage.getItem('FOTO_SALVAR_29');       
          if(foto_salvar_29){   
      enviar(foto_salvar_29,29) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_29');  }      }  
                     vai_29();     }    
    ////////////////          /////////////////
             if(foto_processo==30){ 
                     async function  vai_30 (){
          var foto_salvar_30 =await AsyncStorage.getItem('FOTO_SALVAR_30');       
          if(foto_salvar_30){   
      enviar(foto_salvar_30,30) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_30');  }      }  
                     vai_30();     }    
    ////////////////          /////////////////
             if(foto_processo==31){ 
                     async function  vai_31 (){
          var foto_salvar_31 =await AsyncStorage.getItem('FOTO_SALVAR_31');       
          if(foto_salvar_31){   
      enviar(foto_salvar_31,31) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_31');  }      }  
                     vai_31 ();  }    
    ////////////////          /////////////////
             if(foto_processo==32){ 
                     async function  vai_32 (){
          var foto_salvar_32 =await AsyncStorage.getItem('FOTO_SALVAR_32');       
          if(foto_salvar_32){   
      enviar(foto_salvar_32,32) 
                        await AsyncStorage.removeItem('FOTO_SALVAR_32');  }      }  
                     vai_32();     }    
    ////////////////
     /////////////////
           if(foto_processo==33){ 
         async function  vai_33 (){
             var foto_salvar_33 =await AsyncStorage.getItem('FOTO_SALVAR_33');       
              if(foto_salvar_33){   
          enviar(foto_salvar_33,33) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_33');  }      }  
                         vai_33();     }    
    ////////////////
    /////////////////
           if(foto_processo==34){ 
         async function  vai_34 (){
             var foto_salvar_34 =await AsyncStorage.getItem('FOTO_SALVAR_34');       
              if(foto_salvar_34){   
          enviar(foto_salvar_34,34) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_34');  }      }  
                         vai_34();     }    
    /////////////////////////////////
           if(foto_processo==35){ 
         async function  vai_35 (){
             var foto_salvar_35 =await AsyncStorage.getItem('FOTO_SALVAR_35');       
              if(foto_salvar_35){   
          enviar(foto_salvar_35,35) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_35');  }      }  
                         vai_35();     }    
    /////////////////////////////////
           if(foto_processo==36){ 
         async function  vai_36 (){
             var foto_salvar_36 =await AsyncStorage.getItem('FOTO_SALVAR_36');       
              if(foto_salvar_36){   
          enviar(foto_salvar_36,36) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_36');  }      }  
                         vai_36();     }    
    /////////////////////////////////
           if(foto_processo==37){ 
         async function  vai_37 (){
             var foto_salvar_37 =await AsyncStorage.getItem('FOTO_SALVAR_37');       
              if(foto_salvar_37){   
          enviar(foto_salvar_37,37) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_37');  }      }  
                         vai_37();     }    
    /////////////////////////////////
         
    /////////////////////////////////
           if(foto_processo==38){ 
         async function  vai_38 (){
             var foto_salvar_38 =await AsyncStorage.getItem('FOTO_SALVAR_38');       
              if(foto_salvar_38){   
          enviar(foto_salvar_38,38) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_38');  }      }  
                         vai_38();     }    
    /////////////////////////////////
           if(foto_processo==39){ 
         async function  vai_39 (){
             var foto_salvar_39 =await AsyncStorage.getItem('FOTO_SALVAR_39');       
              if(foto_salvar_39){   
          enviar(foto_salvar_39,39) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_39');  }      }  
                         vai_39();     }    
    /////////////////////////////////
           if(foto_processo==40){ 
         async function  vai_40 (){
             var foto_salvar_40 =await AsyncStorage.getItem('FOTO_SALVAR_40');       
              if(foto_salvar_40){   
          enviar(foto_salvar_40,40) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_40');  }      }  
                         vai_40();     }    
    /////////////////////////////////
           if(foto_processo==41){ 
         async function  vai_41(){
             var foto_salvar_41 =await AsyncStorage.getItem('FOTO_SALVAR_41');       
              if(foto_salvar_41){   
          enviar(foto_salvar_41,41) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_41');  }      }  
                         vai_41();  }    
    /////////////////////////////////
           if(foto_processo==42){ 
         async function  vai_42 (){
             var foto_salvar_42 =await AsyncStorage.getItem('FOTO_SALVAR_42');       
              if(foto_salvar_42){   
          enviar(foto_salvar_42,42) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_42');  }      }  
                         vai_42();  }    
    /////////////////////////////////
           if(foto_processo==43){ 
         async function  vai_43(){
             var foto_salvar_43 =await AsyncStorage.getItem('FOTO_SALVAR_43');       
              if(foto_salvar_43){   
          enviar(foto_salvar_43,43) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_43');  }      }  
                         vai_43();     }    
    /////////////////////////////////
           if(foto_processo==44){ 
         async function  vai_44 (){
             var foto_salvar_44 =await AsyncStorage.getItem('FOTO_SALVAR_44');       
              if(foto_salvar_44){   
          enviar(foto_salvar_44,44) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_44');  }      }  
                         vai_44();     }    
    /////////////////////////////////
           if(foto_processo==45){ 
         async function  vai_45 (){
             var foto_salvar_45 =await AsyncStorage.getItem('FOTO_SALVAR_45');       
              if(foto_salvar_45){   
          enviar(foto_salvar_45,45) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_45');  }      }  
                         vai_45();     }    
    /////////////////////////////////
           if(foto_processo==46){ 
         async function  vai_46 (){
             var foto_salvar_46 =await AsyncStorage.getItem('FOTO_SALVAR_46');       
              if(foto_salvar_46){   
          enviar(foto_salvar_46,46) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_46');  }      }  
                         vai_46();     }    
    /////////////////////////////////
           if(foto_processo==47){ 
         async function  vai_47 (){
             var foto_salvar_47 =await AsyncStorage.getItem('FOTO_SALVAR_47');       
              if(foto_salvar_47){   
          enviar(foto_salvar_47,47) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_47');  }      }  
                         vai_47();     }    
    /////////////////////////////////
           if(foto_processo==48){ 
         async function  vai_48 (){
             var foto_salvar_48 =await AsyncStorage.getItem('FOTO_SALVAR_48');       
              if(foto_salvar_48){   
          enviar(foto_salvar_48,48) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_48');  }      }  
                         vai_48();     }    
    /////////////////////////////////
           if(foto_processo==49){ 
         async function  vai_49 (){
             var foto_salvar_49 =await AsyncStorage.getItem('FOTO_SALVAR_49');       
              if(foto_salvar_49){   
          enviar(foto_salvar_49,49) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_49');  }      }  
                         vai_49();     }    
    /////////////////////////////////
           if(foto_processo==50){ 
         async function  vai_50 (){
             var foto_salvar_50 =await AsyncStorage.getItem('FOTO_SALVAR_50');       
              if(foto_salvar_50){   
          enviar(foto_salvar_50,50) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_50');  }      }  
                         vai_50();     }    
    /////////////////////////////////
           if(foto_processo==51){ 
         async function  vai_51 (){
             var foto_salvar_51 =await AsyncStorage.getItem('FOTO_SALVAR_51');       
              if(foto_salvar_51){   
          enviar(foto_salvar_51,51) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_51');  }      }  
                         vai_51();     }    
    /////////////////////////////////
           if(foto_processo==52){ 
         async function  vai_52 (){
             var foto_salvar_52 =await AsyncStorage.getItem('FOTO_SALVAR_52');       
              if(foto_salvar_52){   
          enviar(foto_salvar_52,52) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_52');  }      }  
                         vai_52();     }    
    /////////////////////////////////
           if(foto_processo==53){ 
         async function  vai_53 (){
             var foto_salvar_53 =await AsyncStorage.getItem('FOTO_SALVAR_53');       
              if(foto_salvar_53){   
          enviar(foto_salvar_53,53) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_53');  }      }  
                         vai_53();     }    
    /////////////////////////////////
           if(foto_processo==54){ 
         async function  vai_54 (){
             var foto_salvar_54 =await AsyncStorage.getItem('FOTO_SALVAR_54');       
              if(foto_salvar_54){   
          enviar(foto_salvar_54,54) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_54');  }      }  
                         vai_54();     }    
    /////////////////////////////////
           if(foto_processo==55){ 
         async function  vai_55 (){
             var foto_salvar_55 =await AsyncStorage.getItem('FOTO_SALVAR_55');       
              if(foto_salvar_55){   
          enviar(foto_salvar_55,55) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_55');  }      }  
                         vai_55();     }    
    /////////////////////////////////
           if(foto_processo==56){ 
         async function  vai_56 (){
             var foto_salvar_56 =await AsyncStorage.getItem('FOTO_SALVAR_56');       
              if(foto_salvar_56){   
          enviar(foto_salvar_56,56) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_56');  }      }  
                         vai_56();     }    
    /////////////////////////////////
         if(foto_processo==57){ 
         async function  vai_57 (){
             var foto_salvar_57 =await AsyncStorage.getItem('FOTO_SALVAR_57');       
              if(foto_salvar_57){   
          enviar(foto_salvar_57,57) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_57');  }      }  
                         vai_57();     }    
    /////////////////////////////////
           if(foto_processo==58){ 
         async function  vai_58 (){
             var foto_salvar_58 =await AsyncStorage.getItem('FOTO_SALVAR_58');       
              if(foto_salvar_58){   
          enviar(foto_salvar_58,58) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_58');  }      }  
                         vai_58();     }    
    /////////////////////////////////
           if(foto_processo==59){ 
         async function  vai_59 (){
             var foto_salvar_59 =await AsyncStorage.getItem('FOTO_SALVAR_59');       
              if(foto_salvar_59){   
          enviar(foto_salvar_59,59) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_59');  }      }  
                         vai_59();     }    
    /////////////////////////////////
           if(foto_processo==60){ 
         async function  vai_60 (){
             var foto_salvar_60 =await AsyncStorage.getItem('FOTO_SALVAR_60');       
              if(foto_salvar_60){   
          enviar(foto_salvar_60,60) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_60');  }      }  
                         vai_60();     }    
    /////////////////////////////////
           if(foto_processo==61){ 
         async function  vai_61 (){
             var foto_salvar_61 =await AsyncStorage.getItem('FOTO_SALVAR_61');       
              if(foto_salvar_61){   
          enviar(foto_salvar_61,61) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_61');  }      }  
                         vai_61();     }    
    /////////////////////////////////
           if(foto_processo==62){ 
         async function  vai_62 (){
             var foto_salvar_62 =await AsyncStorage.getItem('FOTO_SALVAR_62');       
              if(foto_salvar_62){   
          enviar(foto_salvar_62,62) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_62');  }      }  
                         vai_62();     }    
    /////////////////////////////////
           if(foto_processo==63){ 
         async function  vai_63 (){
             var foto_salvar_63 =await AsyncStorage.getItem('FOTO_SALVAR_63');       
              if(foto_salvar_63){   
          enviar(foto_salvar_63,63) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_63');  }      }  
                         vai_63();     }    
    /////////////////////////////////
           if(foto_processo==64){ 
         async function  vai_64 (){
             var foto_salvar_64 =await AsyncStorage.getItem('FOTO_SALVAR_64');       
              if(foto_salvar_64){   
          enviar(foto_salvar_64,64) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_64');  }      }  
                         vai_64();     }    
    /////////////////////////////////
           if(foto_processo==65) {
         async function  vai_65 (){
             var foto_salvar_65 =await AsyncStorage.getItem('FOTO_SALVAR_65');       
              if(foto_salvar_65){   
          enviar(foto_salvar_65,65) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_65');  }      }  
                         vai_65();     }    
    /////////////////////////////////
           if(foto_processo==66){ 
         async function  vai_66 (){
             var foto_salvar_66 =await AsyncStorage.getItem('FOTO_SALVAR_66');       
              if(foto_salvar_66){   
          enviar(foto_salvar_66,66) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_66');  }      }  
                         vai_66();     }    
    /////////////////////////////////
           if(foto_processo==67){ 
         async function  vai_67 (){
             var foto_salvar_67 =await AsyncStorage.getItem('FOTO_SALVAR_67');       
              if(foto_salvar_67){   
          enviar(foto_salvar_67,67) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_67');  }      }  
                         vai_67();     }    
    /////////////////////////////////
           if(foto_processo==68){ 
         async function  vai_68 (){
             var foto_salvar_68 =await AsyncStorage.getItem('FOTO_SALVAR_68');       
              if(foto_salvar_68){   
          enviar(foto_salvar_68,68) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_68');  }      }  
                         vai_68();     }    
    /////////////////////////////////
           if(foto_processo==69){ 
         async function  vai_69 (){
             var foto_salvar_69 =await AsyncStorage.getItem('FOTO_SALVAR_69');       
              if(foto_salvar_69){   
          enviar(foto_salvar_69,69) 
                              await AsyncStorage.removeItem('FOTO_SALVAR_69');  }      }  
                         vai_69();     }    
    /////////////////////////////////
      
       
    if(foto_processo==70){ 
      async function  vai_70 (){
        var foto_salvar_70=await AsyncStorage.getItem('FOTO_SALVAR_70');        
        if(foto_salvar_70){   
        enviar(foto_salvar_70,70) 
                      await AsyncStorage.removeItem('FOTO_SALVAR_70');

                      setLoad(false) 
                      Alert.alert(
                        'Fotos Envias Com Sucesso !', 'dentro de instantes seu anuncio estarar online',
                        [
                          {text: 'Ir para Home', onPress: () => navigation.navigate('Home_logado') },
                          
                        ],
                        { 
                          cancelable: false 
                        }
                      );   
                     
     
      }  
  
       }     vai_70(); 
   
      }

     /////////////////fim da função enviar foto      

async function enviar(data,numero) { 
  console.log(numero);
  /// envia para algum
 
  let formData = new FormData();
  formData.append('photo', { uri:data, name: data, type });
  formData.append('id_anuncio', {name:id_anuncio });
  formData.append('id_anunciante', {name:id_anunciante });
   await fetch('https://anuncio360.com/projeto/foto.php', {
     method: 'POST',
     body: formData,
    header: {'content-type': 'multipart/form-data', },   } )
    
    setFoto_processo(numero +1);  
    console.log(foto_processo);
   
 
/////fim da dunção   
}

async function start ()  {
  setCapitura(true)
  setGrau(angulo); 
  setFotos(0);
  var tornar720;
  setAngulo360(0); 

}

async function stop  () {
  setCapitura(false)
  setGrau(false); 
  setFotos(0);
  var tornar720;
  setAngulo360(0); 

}

async function transformar  ()  {
  setAngulo360(360); 
 // setGrau360(360);
}


 var canal;

 if( grau!==null){


  if( angulo >( 357) & angulo <( 360) & angulo360 ==0){
    canal= transformar();
   /// alert('oi eu sou tranforme');
  }
 // console.log(angulo360);



/// so começar a correr o if se for abilitado 


if(fotos==0){   if(  angulo +angulo360 >(grau +4)  & angulo +angulo360<  (grau +6)){
  setFotos(fotos+1); canal= takePicture();  }   } 
if(fotos==1){   if(  angulo +angulo360 >(grau +6)  & angulo +angulo360<  (grau +10)){   
  setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==2){   if(  angulo +angulo360 >(grau +10) & angulo +angulo360< (grau +15)){   
  setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==3){   if(  angulo +angulo360 >(grau +15) & angulo +angulo360< (grau +20)){   
  setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==4){   if(  angulo +angulo360 >(grau +20) & angulo +angulo360< (grau+25)){   
  setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==5){   if(  angulo +angulo360 >(grau+25)  & angulo +angulo360<  (grau +30)){   
  setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==6){   if(  angulo +angulo360 >(grau +30) & angulo +angulo360< (grau +35)){   
  setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==7){   if(  angulo +angulo360 >(grau +35) & angulo +angulo360< (grau+40)){   
  setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==8){   if(  angulo +angulo360 >(grau +40) & angulo +angulo360< (grau +45)){   
  setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==9){   if(  angulo +angulo360 >(grau +45) & angulo +angulo360< (grau +50)){   
  setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==10){  if(  angulo +angulo360 >(grau +50) & angulo +angulo360< (grau +55)){   
  setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==11){  if(  angulo +angulo360 >(grau +55) & angulo +angulo360< (grau +60)){   
  setFotos(fotos+1);     canal= takePicture(); }      }       
if(fotos==12){   if(  angulo +angulo360 >(grau +60) & angulo +angulo360< (grau +65)){   
    setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==13){   if(  angulo +angulo360 >(grau +65) & angulo +angulo360< (grau +70)){   
    setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==14){   if(  angulo +angulo360 >(grau +70) & angulo +angulo360< (grau+75)){   
    setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==15){   if(  angulo +angulo360 >(grau+75) & angulo +angulo360<  (grau +80)){   
    setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==16){   if(  angulo +angulo360 >(grau +80) & angulo +angulo360< (grau +85)){   
    setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==17){   if(  angulo +angulo360 >(grau +85) & angulo +angulo360< (grau+90)){   
    setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==18){   if(  angulo +angulo360 >(grau +90) & angulo +angulo360< (grau +95)){   
    setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==19){   if(  angulo +angulo360 >(grau +95) & angulo +angulo360< (grau +100)){   
    setFotos(fotos+1);     canal= takePicture(); }      }               
if(fotos==20){   if(  angulo +angulo360 >(grau +100)  & angulo +angulo360<  (grau +105)){
      setFotos(fotos+1); canal= takePicture();  }   } 
if(fotos==21){   if(  angulo +angulo360 >(grau +105)  & angulo +angulo360<  (grau +110)){   
      setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==22){   if(  angulo +angulo360 >(grau +110) & angulo +angulo360< (grau +115)){   
      setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==23){   if(  angulo +angulo360 >(grau +115) & angulo +angulo360< (grau +120)){   
      setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==24){   if(  angulo +angulo360 >(grau +120) & angulo +angulo360< (grau+125)){   
      setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==25){   if(  angulo +angulo360 >(grau+125)  & angulo +angulo360<  (grau +130)){   
      setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==26){   if(  angulo +angulo360 >(grau +130) & angulo +angulo360< (grau +135)){   
      setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==27){   if(  angulo +angulo360 >(grau +135) & angulo +angulo360< (grau+140)){   
      setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==28){   if(  angulo +angulo360 >(grau +140) & angulo +angulo360< (grau +145)){   
      setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==29){   if(  angulo +angulo360 >(grau +145) & angulo +angulo360< (grau +150)){   
      setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==30){  if(  angulo +angulo360 >(grau +150) & angulo +angulo360< (grau +155)){   
      setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==31){   if(  angulo +angulo360 >(grau +155)  & angulo +angulo360<  (grau +160)){   
        setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==32){   if(  angulo +angulo360 >(grau +160) & angulo +angulo360< (grau +165)){   
        setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==33){   if(  angulo +angulo360 >(grau +165) & angulo +angulo360< (grau +170)){   
        setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==34){   if(  angulo +angulo360 >(grau +170) & angulo +angulo360< (grau+175)){   
        setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==35){   if(  angulo +angulo360 >(grau+175)  & angulo +angulo360<  (grau +180)){   
        setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==36){   if(  angulo +angulo360 >(grau +180) & angulo +angulo360< (grau +185)){   
        setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==37){   if(  angulo +angulo360 >(grau +185) & angulo +angulo360< (grau+190)){   
        setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==38){   if(  angulo +angulo360 >(grau +190) & angulo +angulo360< (grau +195)){   
        setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==39){   if(  angulo +angulo360 >(grau +195) & angulo +angulo360< (grau +200)){   
        setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==40){  if(  angulo +angulo360 >(grau +200) & angulo +angulo360< (grau +205)){   
        setFotos(fotos+1);     canal= takePicture(); }      }                   
if(fotos==41){   if(  angulo +angulo360 >(grau +205)  & angulo +angulo360<  (grau +210)){   
          setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==42){   if(  angulo +angulo360 >(grau +210) & angulo +angulo360< (grau +215)){   
          setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==43){   if(  angulo +angulo360 >(grau +215) & angulo +angulo360< (grau +220)){   
          setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==44){   if(  angulo +angulo360 >(grau +220) & angulo +angulo360< (grau+225)){   
          setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==45){   if(  angulo +angulo360 >(grau+225)  & angulo +angulo360<  (grau +230)){   
          setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==46){   if(  angulo +angulo360 >(grau +230) & angulo +angulo360< (grau +235)){   
          setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==47){   if(  angulo +angulo360 >(grau +235) & angulo +angulo360< (grau+240)){   
          setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==48){   if(  angulo +angulo360 >(grau +240) & angulo +angulo360< (grau +245)){   
          setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==49){   if(  angulo +angulo360 >(grau +245) & angulo +angulo360< (grau +250)){   
          setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==50){   if(  angulo +angulo360 >(grau +250)  & angulo +angulo360<  (grau +255)){
            setFotos(fotos+1); canal= takePicture();  }   } 
if(fotos==51){   if(  angulo +angulo360 >(grau +255)  & angulo +angulo360<  (grau +260)){   
            setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==52){   if(  angulo +angulo360 >(grau +260) & angulo +angulo360< (grau +265)){   
            setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==53){   if(  angulo +angulo360 >(grau +265) & angulo +angulo360< (grau +270)){   
            setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==54){   if(  angulo +angulo360 >(grau +270) & angulo +angulo360< (grau+275)){   
            setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==55){   if(  angulo +angulo360 >(grau+275)  & angulo +angulo360<  (grau +280)){   
            setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==56){   if(  angulo +angulo360 >(grau +280) & angulo +angulo360< (grau +285)){   
            setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==57){   if(  angulo +angulo360 >(grau +285) & angulo +angulo360< (grau+290)){   
            setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==58){   if(  angulo +angulo360 >(grau +290) & angulo +angulo360< (grau +295)){   
            setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==59){   if(  angulo +angulo360 >(grau +295) & angulo +angulo360< (grau +300)){   
            setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==60){  if(  angulo +angulo360 >(grau +300) & angulo +angulo360< (grau +305)){   
            setFotos(fotos+1);     canal= takePicture(); }      }      
           
if(fotos==61){   if(  angulo +angulo360 >(grau +305)  & angulo +angulo360<  (grau +310)){   
              setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==62){   if(  angulo +angulo360 >(grau +310) & angulo +angulo360< (grau +315)){   
              setFotos(fotos+1);     canal= takePicture(); }      }   
if(fotos==63){   if(  angulo +angulo360 >(grau +315) & angulo +angulo360< (grau +320)){   
              setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==64){   if(  angulo +angulo360 >(grau +320) & angulo +angulo360< (grau+325)){   
              setFotos(fotos+1);     canal= takePicture(); }      }  
if(fotos==65){   if(  angulo +angulo360 >(grau+325)  & angulo +angulo360<  (grau +330)){   
              setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==66){   if(  angulo +angulo360 >(grau +330) & angulo +angulo360< (grau +335)){   
              setFotos(fotos+1);     canal= takePicture(); }      }          
if(fotos==67){   if(  angulo +angulo360 >(grau +335) & angulo +angulo360< (grau+340)){   
              setFotos(fotos+1);     canal= takePicture(); }      }            
if(fotos==68){   if(  angulo +angulo360 >(grau +340) & angulo +angulo360< (grau +345)){   
              setFotos(fotos+1);     canal= takePicture(); }      }     
if(fotos==69){   if(  angulo +angulo360 >(grau +345) & angulo +angulo360< (grau +350)){   
              setFotos(fotos+1);     canal= takePicture(); }      }
if(fotos==70){  if(  angulo +angulo360 >(grau +350) & angulo +angulo360< (grau +355)){   
              setFotos(fotos+1);     canal= takePicture(); }      }      
 if(fotos==71){  if(  angulo +angulo360 >(grau +350) & angulo +angulo360< (grau +360)){   
              setFotos(fotos+1);     canal= takePicture(); }      }      
    
}   

if (captura  ) {
  return (
    <SafeAreaView style={styles.container}>
   <View >
 
   <Modal  animationType="slide"
   
   visible={janela}>
<View style={{alignItems:'center',  flex: 1}} >
     
<View style={{alignItems:'center', marginTop:200, flexDirection:'row'}} >
     
    
     <View>     
     <FontAwesome.Button onPress={()=>setJanela(false)} style={styles.button_branco_100} name="times-circle" size={20}     backgroundColor="#feffff" >
     <Text  style={styles.font_branca_16} >Cancelar  </Text>    
     </FontAwesome.Button>     
     </View>
     </View>

     <View style={{alignItems:'center', marginTop:100,    flexDirection:'row'}} >
     <Text>   Aguardando  ..... {foto_processo}</Text>
     </View>
     <View style={{alignItems:'center', marginTop:100,    flexDirection:'row'}} >
     <ActivityIndicator animating={load}  size={42} color="#121212" />
     </View>
     
 </View> 
 
 
 
 
 
 
 
 
   </Modal> 
     
      
    </View>
      <Camera style={styles.camera}
      ref={camRef}
      type={type}>
        </Camera> 
      <View style={{flexDirection:'row'}} >
    
     



      <View style={styles.topo_foto1} >                        
             <FontAwesome.Button  style={styles. button_foto_Voltar}  onPress={() => navigation.goBack()} name="arrow-left" size={15} color="#ffffff47"   backgroundColor="#959ca347" >
            
             </FontAwesome.Button> 
      </View>
        
         
      <View style={styles.topo_foto2} >            
           <FontAwesome.Button  onPress={() =>{ stop(); }} style={styles. button_foto_Voltar} name="image" size={15}color="#ffffff47" backgroundColor="#959ca347">
           <Text style={styles.font_branca}>Desativar Capitura</Text>     
          </FontAwesome.Button>
      </View>
         
      <View style={styles.topo_foto1} >                          
             <FontAwesome.Button  style={styles.button_foto_Voltar} name="image" size={15} color="#ffffff47" backgroundColor="#959ca347">
             <Text style={styles.font_branca}>{fotos ? fotos : '0'} </Text>
             </FontAwesome.Button> 
      </View>
     
      </View>   
  
      
     
    </SafeAreaView>  );
 

}else {

  return (
    <>
    <SafeAreaView style={styles.container}>
  
    <Camera style={styles.camera}
      ref={camRef}
      type={type}>

       
  
      
      </Camera>  

      <View style={{flexDirection:'row'}} >
    
     



      <View style={styles.topo_foto1} >                        
             <FontAwesome.Button  style={styles. button_foto_Voltar}  onPress={() => navigation.goBack()} name="arrow-left" size={15} color="#ffffff47"   backgroundColor="#959ca347" >
            
             </FontAwesome.Button> 
      </View>
        
         
      <View style={styles.topo_foto2} >            
           <FontAwesome.Button  onPress={() =>{ start(); }} style={styles. button_foto_Voltar} name="image" size={15}color="#ffffff47" backgroundColor="#272728">
           <Text style={styles.font_branca}>Ativar Captura</Text>     
          </FontAwesome.Button>
      </View>
         
      <View style={styles.topo_foto1} >                          
             <FontAwesome.Button  style={styles.button_foto_Voltar} name="image" size={15} color="#ffffff47" backgroundColor="#959ca347">
             <Text style={styles.font_branca}>{fotos ? fotos : '0'} </Text>
             </FontAwesome.Button> 
      </View>
     
      </View> 
      
    
    </SafeAreaView> 
    
    </>
    );
}

 
  }



function roundToTwo(num) {
  return +(Math.round(num + "e+3")  + "e-3");
}