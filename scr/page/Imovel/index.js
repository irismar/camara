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


 ///// "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";
