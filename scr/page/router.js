import React, { useState, useEffect,useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home  from "../page/Home"
import Home_logado  from "../page/Home_logado"
import Cadastro from "../page/Cadastro";
import Imovel from "../page/Imovel";
import Local from "../page/Local";
import Produto from "../page/Produto"; 
import Automovel from "../page/automovel";
import Cadastro_produto from "../page/Cadastro_produto";
import Sobre from "../page/Sobre";
import Lista from "../page/Lista";
import Cadastro_usuario from "../page/cadastro_usuario";
import Login from "../page/Login";
import Configuracao from "../page/Configuracao";
import Porta from "../page/Porta";
import Foto_perfil from "../page/Foto_perfil";
import Cadastro_endereco from "../page/Cadastro_endereco";
///import ReactSession from 'react-client-session';
import UserProfile from '../page/localizacao';
const Stack =createStackNavigator();





function Routes( ) {




      return(

<NavigationContainer>
       
       
       <Stack.Navigator >
             <Stack.Screen
              name="Porta"
              component={Porta}
              options={{headerShown:false}}
        />

        
    
             <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown:false}}
        />
        


        <Stack.Screen
              name="Home_logado"
              component={Home_logado}
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
      
        
      <Stack.Screen
              name="Cadastro_usuario"
              component={Cadastro_usuario}
              options={{headerShown:false}}
        />

      <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown:false}}
        />
        <Stack.Screen
              name="Configuracao"
              component={Configuracao}
              options={{headerShown:false}}
        />

        <Stack.Screen
              name="Cadastro_endereco"
              component={Cadastro_endereco}
              options={{headerShown:false}}
        />

        <Stack.Screen
              name="Foto_perfil"
              component={Foto_perfil}
              options={{headerShown:false}}
        /> 

         <Stack.Screen
              name="Local"
              component={Local}
              options={{headerShown:false}}
        />     
     
       

        
      
          
         </Stack.Navigator>

      </NavigationContainer>
      );
      
          
  

    

  }
  export default Routes;
