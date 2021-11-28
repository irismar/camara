import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './scr/page/router';

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';


export default function App( ) {

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
    
  });
  let fontSize = 24;
  let paddingVertical = 6;

   //console.log(fontsLoaded);
   if (!fontsLoaded  ) {
    return <AppLoading />;
   } else{


  return (   
   <>
   <Routes/>
   </>

  );
   }
}



