import React, { useState, useEffect,useRef } from 'react';
import { Alert, StyleSheet, Text, View,  SafeAreaView ,TouchableOpacity,Image,StatusBar} from 'react-native';
import { Camera } from 'expo-camera';
import{FontAwesome} from '@expo/vector-icons';
import { DeviceMotion } from 'expo-sensors';
import * as MediaLibrary from 'expo-media-library';


export default function Sobre ( {route, navigation}) {

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
   Camera.Constants.AutoFocus.auto
    );
    const [retorno, setRetorno] = useState({
      type: '',
      mensagem: ''
    })
  
  const asset=useState(0);  
  const camRef=useRef(null);
  const [capturedPhoto, setCapturedPhoto]=useState(null);
  const [open, setOpen]=useState(false)
  const [data, setData] = useState({    t: 0,    y: 0,    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [cod, setCod] = useState();
  const [fotos, setFotos] = useState(0);  const [grau, setGrau] = useState(null);
  const [grau360, setGrau360] = useState(0);

  const [angulo360, setAngulo360]=useState(0);  

  const _subscribe = () => {
    setSubscription(
     
      DeviceMotion .addListener(({ rotation }) => {   
            setData(rotation);     
           })    );  };
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);  };
    useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);
  const { alpha } =data;
  var angulo;
  angulo=roundToTwo(alpha);
  angulo= roundToTwo(((angulo+4.01-0.)*57)-49);
  useEffect(() => {  
    (async () => {  
      const { status } = await Camera.requestCameraPermissionsAsync();     
      setHasPermission(status === 'granted');    })  ();
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
 
  ///console.log(dod);
   takePicture=  async () =>{  

    setCod(route.params?.cod );
  //var dod=route.params?.cod;
  if(camRef){    
    const data=await camRef.current.takePictureAsync();
    //console.log (data);      
    setCapturedPhoto(data.uri);  
    uploadImage();
  }  };
  
  // console.log(dod)
//función para subir imagen al server, en este caso es un servidor en PHP
uploadImage = async () => { 
  /// envia para algum
  const asset= await MediaLibrary.createAssetAsync(capturedPhoto);  
  let formData = new FormData();
  formData.append('photo', { uri:capturedPhoto, name: capturedPhoto, type });

  formData.append('codigo', {name:cod });
  await fetch('https://anuncio360.com/projeto/foto.php', {
     method: 'POST',
     body: formData,
    header: {
     'content-type': 'multipart/form-data',
     },
     
   }   )

   .then((response) => response.json())
   .then((responseJson) => {
   /////console.log(responseJson)
     if (responseJson.erro) {
         Alert.alert(retorno.mensagem,'presicione Desativar Captura incie nova Captura de Fotos');
       setRetorno({
         type: 'erro',
         mensagem: responseJson.messagem
       });
     } else {
     // alert(retorno.mensagem);
     // navigation.reset( { index:0, routes:[{name:"Sobre"}]})
      // var ir= navigation.navigate('Cadastro') 
       setRetorno({
         type: 'success',
         mensagem: responseJson.messagem
       });
     }
   }).catch(() => {



     setRetorno({
    
       type: 'erro',
       mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
     });
   }); 
 
   if(fotos==72){
    Alert.alert(
      'Captura Concluida Com Sucesso ',
      'Seja Cadastrar Novo Produto ?',
      [
        {
          text: 'Sim',
          onPress: () =>navigation.navigate('Home'),
          style: 'cancel',
        },
        { 
          text: 'Retornar para HOme', 
          onPress: () =>navigation.navigate('Home')
        }
      ],
      {
        onDismiss: () => console.log('Dismiss')
      }
    );
   }
}

start = async () => {

  setGrau(angulo); 
  setFotos(0);
  var tornar720;
  setAngulo360(0); 

}

transformar  = async () => {
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


if(fotos==0){   if(  angulo +angulo360 >(grau +1)  & angulo +angulo360<  (grau +5)){
  setFotos(fotos+1); canal= takePicture();  }   } 
if(fotos==1){   if(  angulo +angulo360 >(grau +5)  & angulo +angulo360<  (grau +10)){   
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
              setFotos(fotos+1);     canal= takePicture(); }   
           
            
            }      
    
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
 
<View style={{flexDirection:'row'}} >
<View style={styles.topo2} >
         
         <TouchableOpacity  style={styles.button2} >
        </TouchableOpacity>
        <FontAwesome.Button  onPress={() =>{ start(); }} style={styles.button3} name="image" size={15} color="#4630eb" backgroundColor="#feffff" >
        <Text style={styles.font2}>{grau ? 'Desativar Captura' : 'Ativar Captura'}</Text>
           
        </FontAwesome.Button>
    
     </View>



  <View style={styles.topo3} >
         
       <TouchableOpacity  style={styles.button2} >
      </TouchableOpacity>
      <FontAwesome.Button   style={styles.button3} name="image" size={15} color="#4630eb" backgroundColor="#feffff" >
      
            <Text style={styles.font3}>
     {fotos ? fotos : '0'}     
      </Text>
      </FontAwesome.Button>
  
   </View>
   

   




 </View>


     
    
       
        
      
   
      <Camera style={styles.camera}
      ref={camRef}
      type={type}>
        <SafeAreaView style={styles.buttonContainer}>
        
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>            
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Camera>     
      <TouchableOpacity  style={styles.button} onPress={takePicture}>
      <FontAwesome name="camera" size={23} color="#4630eb"/>
      </TouchableOpacity>

      </> )
  }
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
    fontFamily:'Ubuntu_300Light',
    backgroundColor:'#d9d7d785',    
    alignItems: 'center',
    justifyContent:'center',
    margin:1,
    height:30,
    },
    text: {
    fontSize: 18,
    color: '#e91e63',
  },
  button3: {  
    color:'#4630eb', 
     backgroundColor:'#d9d7d785',
      height:50,
     
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
    font2: {  
      fontFamily:'Ubuntu_300Light',
      alignItems: 'center',
      justifyContent:'center',
      fontSize:16,
      color:'#3f51b5', 
      fontWeight:'400',
    
      }, 

      font3: {  
        fontFamily:'Ubuntu_300Light',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:19,
        color:'#009688', 
        fontWeight:'400',
      
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




function roundToTwo(num) {
  return +(Math.round(num + "e+3")  + "e-3");
}

function numero_inteiro(num1){ return Math.round(Number(num1)); };