import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View,  SafeAreaView ,TouchableOpacity,Modal,Image, ListViewBase} from 'react-native';
import { Camera } from 'expo-camera';
import{FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DeviceMotion } from 'expo-sensors';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { ActivityIndicator } from 'react-native-paper';
import styles from '../Estilo';
export default function Sobre ( {route, navigation}) {
const[id_anunciante,setId_anunciante]=useState(route.params?.id_anunciante)
const[id_anuncio,setId_anuncio]=useState(route.params?.id_anuncio)
const[foto_processo,setFoto_processo]=useState(false)
const[load,setLoad]=useState(false)
const[captura, setCapitura]=useState(false)
const[janela, setJanela]=useState(false)
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
    //console.log (data);      
    setCapturedPhoto(data.uri); 
    salvar_foto() 
    /////uploadImage();
    console.log(capturedPhoto)
  }  };

  async function salvar_foto  ()  { 
    if(fotos==1){ await AsyncStorage.setItem('FOTO_SALVAR_1', capturedPhoto)}
    if(fotos==2){ await AsyncStorage.setItem('FOTO_SALVAR_2', capturedPhoto)}
    if(fotos==3){ await AsyncStorage.setItem('FOTO_SALVAR_3', capturedPhoto)}
    if(fotos==4){ await AsyncStorage.setItem('FOTO_SALVAR_4', capturedPhoto)}
    if(fotos==5){ await AsyncStorage.setItem('FOTO_SALVAR_5', capturedPhoto)}
    if(fotos==6){ await AsyncStorage.setItem('FOTO_SALVAR_6', capturedPhoto); setJanela(true)}
    if(fotos==7){ await AsyncStorage.setItem('FOTO_SALVAR_7', capturedPhoto)}
    if(fotos==8){ await AsyncStorage.setItem('FOTO_SALVAR_8', capturedPhoto)}
    if(fotos==9){ await AsyncStorage.setItem('FOTO_SALVAR_9', capturedPhoto)}
    if(fotos==10){ await AsyncStorage.setItem('FOTO_SALVAR_10', capturedPhoto)}
    if(fotos==11){ await AsyncStorage.setItem('FOTO_SALVAR_11', capturedPhoto)}
    if(fotos==12){ await AsyncStorage.setItem('FOTO_SALVAR_12', capturedPhoto)}
    if(fotos==13){ await AsyncStorage.setItem('FOTO_SALVAR_13', capturedPhoto)}
    if(fotos==14){ await AsyncStorage.setItem('FOTO_SALVAR_14', capturedPhoto)}
    if(fotos==15){ await AsyncStorage.setItem('FOTO_SALVAR_15', capturedPhoto)}
    if(fotos==16){ await AsyncStorage.setItem('FOTO_SALVAR_16', capturedPhoto)}
    if(fotos==17){ await AsyncStorage.setItem('FOTO_SALVAR_17', capturedPhoto)}
    if(fotos==18){ await AsyncStorage.setItem('FOTO_SALVAR_18', capturedPhoto)}
    if(fotos==19){ await AsyncStorage.setItem('FOTO_SALVAR_19', capturedPhoto)}
    if(fotos==20){ await AsyncStorage.setItem('FOTO_SALVAR_20', capturedPhoto)}
    if(fotos==10){ await AsyncStorage.setItem('FOTO_SALVAR_10', capturedPhoto)}
    if(fotos==11){ await AsyncStorage.setItem('FOTO_SALVAR_11', capturedPhoto)}
    if(fotos==12){ await AsyncStorage.setItem('FOTO_SALVAR_12', capturedPhoto)}
    if(fotos==13){ await AsyncStorage.setItem('FOTO_SALVAR_13', capturedPhoto)}
    if(fotos==14){ await AsyncStorage.setItem('FOTO_SALVAR_14', capturedPhoto)}
    if(fotos==15){ await AsyncStorage.setItem('FOTO_SALVAR_15', capturedPhoto)}
    if(fotos==16){ await AsyncStorage.setItem('FOTO_SALVAR_16', capturedPhoto)}
    if(fotos==17){ await AsyncStorage.setItem('FOTO_SALVAR_17', capturedPhoto)}
    if(fotos==18){ await AsyncStorage.setItem('FOTO_SALVAR_18', capturedPhoto)}
    if(fotos==19){ await AsyncStorage.setItem('FOTO_SALVAR_19', capturedPhoto)}
    if(fotos==20){ await AsyncStorage.setItem('FOTO_SALVAR_20', capturedPhoto)}
    if(fotos==21){ await AsyncStorage.setItem('FOTO_SALVAR_21', capturedPhoto)}
    if(fotos==22){ await AsyncStorage.setItem('FOTO_SALVAR_22', capturedPhoto)}
    if(fotos==23){ await AsyncStorage.setItem('FOTO_SALVAR_23', capturedPhoto)}
    if(fotos==24){ await AsyncStorage.setItem('FOTO_SALVAR_24', capturedPhoto)}
    if(fotos==25){ await AsyncStorage.setItem('FOTO_SALVAR_25', capturedPhoto)}
    if(fotos==26){ await AsyncStorage.setItem('FOTO_SALVAR_26', capturedPhoto)}
    if(fotos==27){ await AsyncStorage.setItem('FOTO_SALVAR_27', capturedPhoto)}
    if(fotos==28){ await AsyncStorage.setItem('FOTO_SALVAR_28', capturedPhoto)}
    if(fotos==29){ await AsyncStorage.setItem('FOTO_SALVAR_29', capturedPhoto)}
    if(fotos==30){ await AsyncStorage.setItem('FOTO_SALVAR_30', capturedPhoto)}
    if(fotos==31){ await AsyncStorage.setItem('FOTO_SALVAR_31', capturedPhoto)}
    if(fotos==32){ await AsyncStorage.setItem('FOTO_SALVAR_32', capturedPhoto)}
    if(fotos==33){ await AsyncStorage.setItem('FOTO_SALVAR_33', capturedPhoto)}
    if(fotos==34){ await AsyncStorage.setItem('FOTO_SALVAR_34', capturedPhoto)}
    if(fotos==35){ await AsyncStorage.setItem('FOTO_SALVAR_35', capturedPhoto)}
    if(fotos==36){ await AsyncStorage.setItem('FOTO_SALVAR_36', capturedPhoto)}
    if(fotos==37){ await AsyncStorage.setItem('FOTO_SALVAR_37', capturedPhoto)}
    if(fotos==38){ await AsyncStorage.setItem('FOTO_SALVAR_38', capturedPhoto)}
    if(fotos==39){ await AsyncStorage.setItem('FOTO_SALVAR_39', capturedPhoto)}
    if(fotos==40){ await AsyncStorage.setItem('FOTO_SALVAR_40', capturedPhoto)}
    if(fotos==41){ await AsyncStorage.setItem('FOTO_SALVAR_41', capturedPhoto)}
    if(fotos==42){ await AsyncStorage.setItem('FOTO_SALVAR_42', capturedPhoto)}
    if(fotos==43){ await AsyncStorage.setItem('FOTO_SALVAR_43', capturedPhoto)}
    if(fotos==44){ await AsyncStorage.setItem('FOTO_SALVAR_44', capturedPhoto)}
    if(fotos==45){ await AsyncStorage.setItem('FOTO_SALVAR_45', capturedPhoto)}
    if(fotos==46){ await AsyncStorage.setItem('FOTO_SALVAR_46', capturedPhoto)}
    if(fotos==47){ await AsyncStorage.setItem('FOTO_SALVAR_47', capturedPhoto)}
    if(fotos==48){ await AsyncStorage.setItem('FOTO_SALVAR_48', capturedPhoto)}
    if(fotos==49){ await AsyncStorage.setItem('FOTO_SALVAR_49', capturedPhoto)}
    if(fotos==50){ await AsyncStorage.setItem('FOTO_SALVAR_50', capturedPhoto)}
    if(fotos==51){ await AsyncStorage.setItem('FOTO_SALVAR_51', capturedPhoto)}
    if(fotos==52){ await AsyncStorage.setItem('FOTO_SALVAR_52', capturedPhoto)}
    if(fotos==53){ await AsyncStorage.setItem('FOTO_SALVAR_53', capturedPhoto)}
    if(fotos==54){ await AsyncStorage.setItem('FOTO_SALVAR_54', capturedPhoto)}
    if(fotos==55){ await AsyncStorage.setItem('FOTO_SALVAR_55', capturedPhoto)}
    if(fotos==56){ await AsyncStorage.setItem('FOTO_SALVAR_56', capturedPhoto)}
    if(fotos==57){ await AsyncStorage.setItem('FOTO_SALVAR_57', capturedPhoto)}
    if(fotos==58){ await AsyncStorage.setItem('FOTO_SALVAR_58', capturedPhoto)}
    if(fotos==59){ await AsyncStorage.setItem('FOTO_SALVAR_59', capturedPhoto)}
    if(fotos==60){ await AsyncStorage.setItem('FOTO_SALVAR_60', capturedPhoto)}
    if(fotos==61){ await AsyncStorage.setItem('FOTO_SALVAR_61', capturedPhoto)}
    if(fotos==62){ await AsyncStorage.setItem('FOTO_SALVAR_62', capturedPhoto)}
    if(fotos==63){ await AsyncStorage.setItem('FOTO_SALVAR_63', capturedPhoto)}
    if(fotos==64){ await AsyncStorage.setItem('FOTO_SALVAR_64', capturedPhoto)}
    if(fotos==65){ await AsyncStorage.setItem('FOTO_SALVAR_65', capturedPhoto)}
    if(fotos==66){ await AsyncStorage.setItem('FOTO_SALVAR_66', capturedPhoto)}
    if(fotos==67){ await AsyncStorage.setItem('FOTO_SALVAR_67', capturedPhoto)}
    if(fotos==68){ await AsyncStorage.setItem('FOTO_SALVAR_68', capturedPhoto)}
    if(fotos==69){ await AsyncStorage.setItem('FOTO_SALVAR_69', capturedPhoto)}
    if(fotos==70){ await AsyncStorage.setItem('FOTO_SALVAR_70', capturedPhoto)}
    if(fotos==71){ await AsyncStorage.setItem('FOTO_SALVAR_71', capturedPhoto)}
    if(fotos==72){ await AsyncStorage.setItem('FOTO_SALVAR_72', capturedPhoto)}
     
    }
  async function  enviar_fotos_para_server (){
  setLoad(true)
  
       var foto_salvar_1=await AsyncStorage.getItem('FOTO_SALVAR_1');
        if(foto_salvar_1){
    setFoto_processo('1')
    enviar(foto_salvar_1) 
                      await AsyncStorage.removeItem('FOTO_SALVAR_1');
                     }
    //////////////////////////////////////////////////////////////
       var foto_salvar_2=await AsyncStorage.getItem('FOTO_SALVAR_2');
    if(foto_salvar_2){
setFoto_processo('2')
enviar(foto_salvar_2) 
                     await AsyncStorage.removeItem('FOTO_SALVAR_2');
                 }
//////////////////////////////////////////////////////////////
      var foto_salvar_3=await AsyncStorage.getItem('FOTO_SALVAR_3');
    if(foto_salvar_3){
   setFoto_processo('3')
   enviar(foto_salvar_3) 
                    await AsyncStorage.removeItem('FOTO_SALVAR_3');
             }
//////////////////////////////////////////////////////////////
      var foto_salvar_4=await AsyncStorage.getItem('FOTO_SALVAR_4');
if(foto_salvar_4){
setFoto_processo('4')
enviar(foto_salvar_4) 
                   await AsyncStorage.removeItem('FOTO_SALVAR_4');
             }
//////////////////////////////////////////////////////////////
var foto_salvar_5=await AsyncStorage.getItem('FOTO_SALVAR_5');
if(foto_salvar_5){
setFoto_processo('5')
enviar(foto_salvar_5) 
              await AsyncStorage.removeItem('FOTO_SALVAR_5');
             }
//////////////////////////////////////////////////////////////
var foto_salvar_6=await AsyncStorage.getItem('FOTO_SALVAR_6');
if(foto_salvar_6){
setFoto_processo('6')
enviar(foto_salvar_6) 
              await AsyncStorage.removeItem('FOTO_SALVAR_6');
             }
//////////////////////////////////////////////////////////////                 
//////////////////////////////////////////////////////////////
var foto_salvar_7=await AsyncStorage.getItem('FOTO_SALVAR_7');
if(foto_salvar_7){
setFoto_processo('7')
enviar(foto_salvar_7) 
              await AsyncStorage.removeItem('FOTO_SALVAR_7');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_8=await AsyncStorage.getItem('FOTO_SALVAR_8');
if(foto_salvar_8){
setFoto_processo('8')
enviar(foto_salvar_8) 
              await AsyncStorage.removeItem('FOTO_SALVAR_8');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_9=await AsyncStorage.getItem('FOTO_SALVAR_9');
if(foto_salvar_9){
setFoto_processo('9')
enviar(foto_salvar_9) 
              await AsyncStorage.removeItem('FOTO_SALVAR_9');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_10=await AsyncStorage.getItem('FOTO_SALVAR_10');
if(foto_salvar_10){
setFoto_processo('10')
enviar(foto_salvar_10) 
              await AsyncStorage.removeItem('FOTO_SALVAR_10');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_11=await AsyncStorage.getItem('FOTO_SALVAR_11');
if(foto_salvar_11){
setFoto_processo('11')
enviar(foto_salvar_11) 
              await AsyncStorage.removeItem('FOTO_SALVAR_11');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_12=await AsyncStorage.getItem('FOTO_SALVAR_12');
if(foto_salvar_12){
setFoto_processo('12')
enviar(foto_salvar_12) 
              await AsyncStorage.removeItem('FOTO_SALVAR_12');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_13=await AsyncStorage.getItem('FOTO_SALVAR_13');
if(foto_salvar_13){
setFoto_processo('13')
enviar(foto_salvar_13) 
              await AsyncStorage.removeItem('FOTO_SALVAR_13');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_14=await AsyncStorage.getItem('FOTO_SALVAR_14');
if(foto_salvar_14){
setFoto_processo('14')
enviar(foto_salvar_14) 
              await AsyncStorage.removeItem('FOTO_SALVAR_14');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_15=await AsyncStorage.getItem('FOTO_SALVAR_15');
if(foto_salvar_15){
setFoto_processo('15')
enviar(foto_salvar_15) 
              await AsyncStorage.removeItem('FOTO_SALVAR_15');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_16=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_16){
setFoto_processo('16')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_17=await AsyncStorage.getItem('FOTO_SALVAR_17');
if(foto_salvar_17){
setFoto_processo('17')
enviar(foto_salvar_17) 
              await AsyncStorage.removeItem('FOTO_SALVAR_17');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_18=await AsyncStorage.getItem('FOTO_SALVAR_18');
if(foto_salvar_17){
setFoto_processo('17')
enviar(foto_salvar_17) 
              await AsyncStorage.removeItem('FOTO_SALVAR_17');
             }
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
var foto_salvar_18=await AsyncStorage.getItem('FOTO_SALVAR_18');
if(foto_salvar_18){
setFoto_processo('18')
enviar(foto_salvar_18) 
              await AsyncStorage.removeItem('FOTO_SALVAR_18');
             } 
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_19=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_19){
setFoto_processo('9')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_16=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_16){
setFoto_processo('16')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_16=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_16){
setFoto_processo('16')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_16=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_16){
setFoto_processo('16')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var foto_salvar_16=await AsyncStorage.getItem('FOTO_SALVAR_16');
if(foto_salvar_16){
setFoto_processo('16')
enviar(foto_salvar_16) 
              await AsyncStorage.removeItem('FOTO_SALVAR_16');
             }
//////////////////////////////////////////////////////////////
setJanela(true)
//////////////////////////////////////////////////////////////
  }



async function enviar(data) { 

  /// envia para algum
  /////const asset= await MediaLibrary.createAssetAsync(capturedPhoto);  
  let formData = new FormData();
  formData.append('photo', { uri:data, name: data, type });
  formData.append('id_anuncio', {name:id_anuncio });
  formData.append('id_anunciante', {name:id_anunciante });
   await fetch('https://anuncio360.com/projeto/foto.php', {
     method: 'POST',
     body: formData,
    header: {
     'content-type': 'multipart/form-data',
     },
     
   }  
    )

    setFoto_processo(false)
    setLoad(false)
    setJanela(false)
 
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
     
     <View  >
     <FontAwesome.Button onPress={()=>enviar_fotos_para_server()} style={styles.button_branco_100} name="upload" size={20}    backgroundColor="#feffff" >
     <Text  style={styles.font_branca_16} >Enviar fotos  </Text>
     </FontAwesome.Button>    
     </View>
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
  
      
      </Camera>  
    </SafeAreaView>  );
 

}else {

  return (
    <>
    <SafeAreaView style={styles.container}>
  
      <Camera style={styles.camera}
      ref={camRef}
      type={type}>

      <View style={{flexDirection:'row'}} >

      <View style={styles.topo_foto1} >                        
             <FontAwesome.Button  style={styles. button_foto_Voltar}  onPress={() => navigation.goBack()} name="arrow-left" size={15} color="#ffffff47"   backgroundColor="#959ca347" >
            
             </FontAwesome.Button> 
      </View>
        
         
      <View style={styles.topo_foto2} >            
           <FontAwesome.Button  onPress={() =>{ start(); }} style={styles. button_foto_Voltar} name="image" size={15}color="#ffffff47" backgroundColor="#959ca347">
           <Text style={styles.font_branca}>Ativar Captura</Text>     
          </FontAwesome.Button>
      </View>
         
      <View style={styles.topo_foto1} >                          
             <FontAwesome.Button  style={styles.button_foto_Voltar} name="image" size={15} color="#ffffff47" backgroundColor="#959ca347">
             <Text style={styles.font_branca}>{fotos ? fotos : '0'} </Text>
             </FontAwesome.Button> 
      </View>
      </View>   
      
      
      </Camera>  
    </SafeAreaView> 
    
    </>
    );
}




  
  }






function roundToTwo(num) {
  return +(Math.round(num + "e+3")  + "e-3");
}

function numero_inteiro(num1){ return Math.round(Number(num1)); };8