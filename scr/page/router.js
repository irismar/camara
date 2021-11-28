import React, { useState, useEffect,useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home  from "../page/Home"
import Cadastro from "../page/Cadastro";
import Imovel from "../page/Imovel";
import Local from "../page/Local";
import Produto from "../page/Produto"; 
import Automovel from "../page/automovel";
import Cadastro_produto from "../page/Cadastro_produto";
import Sobre from "../page/Sobre";
import Lista from "../page/Lista";
import Topo from "../page/Topo";
///import ReactSession from 'react-client-session';
import UserProfile from '../page/localizacao';
const Stack =createStackNavigator();

function Routes( ) {
  

///console.log('latitude'+ latitude_100);

  
    return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
             <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown:false}}
        />


       <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{headerShown:false}}
        />

       <Stack.Screen
              name="Produto"
              component={Produto}
              options={{headerShown:false}}
        />

      <Stack.Screen
              name="Cadastro_produto"
              component={Cadastro_produto}
              options={{headerShown:false}}
        />

      <Stack.Screen
              name="Sobre"
              component={Sobre}
              options={{headerShown:false}}
        /> 

       <Stack.Screen
              name="Lista"
              component={Lista}
              options={{headerShown:false}}
        /> 
        

      
          
         </Stack.Navigator>

      </NavigationContainer>
    );
  }
  export default Routes;
