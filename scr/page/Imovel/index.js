import React from "react";
import { View, Text, Button } from 'react-native';




export default function Imovel( {navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'top' }}>
      
        <Button
         title="eu sou imoveis "
         onPress={ ()=>navigation.navigate('Home') }
         />
      </View>
    );
  }