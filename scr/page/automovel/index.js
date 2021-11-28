import React from "react";
import { View, Text, Button } from 'react-native';

export default function Automovel( {navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'left', justifyContent: 'top' }}>
      
        <Button
         title="eu sou Automovel "
         onPress={ ()=>navigation.navigate('Home') }
         />
      </View>
    );
  }