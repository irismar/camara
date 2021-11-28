import React from "react";
import { View, Text, Button } from 'react-native';




export default function Local( {navigation, route}) {
    return (
      <>
      
        <Button
         title="eu sou Local "
         onPress={ ()=>navigation.navigate('Home') }
         />
      </>
    );
  }