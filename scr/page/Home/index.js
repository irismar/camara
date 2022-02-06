import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { WebView } from 'react-native-webview';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import styles from '../Estilo';


export default function Home({ navigation, route }) {
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [pagina, setPagina] = useState(1);
  const [anuncio_pagina, setAnuncio_pagina] = useState(1);
  const [loadin, setLoadin] = useState(false);
  const [logogin, setLogogin] = useState(false);
  const [toktok, setToktok] = useState(false);
  const[logout,setLogout]=useState(route.params?.latitude)
  console.log('pagina  home') 

 
  useEffect(() => {

   

    getProdutos()
  
    
  }, []);

 /// console.log(tor); 


 
 
  const getProdutos = async () => {
    if (loadin) return;

    setLoadin(true);
    setAnuncio_pagina(11)
    await fetch("https://anuncio360.com/projeto/exibir.php?pagina=" + pagina)
      .then((response) => response.json())
      .then((responseJson) => (

        // console.log(responseJson),
        setData([...data, ...responseJson]),
        setLoadin(false)

      ));

    setPagina(pagina + 1);

    //console.log(data);
  }
 
 
     
  





  const Item = ({ titulo, id, preco, descricao, estado, url, oi }) => (

    <>
      <View style={styles.quadro}>
        <View style={styles.quadro2}>

          <WebView
            style={styles.image}
            /// originWhitelist={['*']}
            startInLoadingState={false}
            onLoadEnd={() => { FooterList(); }}
            source={{ uri: url }}
          />

        </View>
        <View>
          <View style={{ flexDirection: 'row' }} >

            <View style={styles.topo2} >

              <Text style={styles.title}>{titulo}{id}</Text>
              <Text style={styles.descricao}>{descricao}</Text>

            </View>


            <View style={styles.topo4} >

              <Text style={styles.preco}>R${preco ? preco : 'A Combinar'} </Text>

              <FontAwesome.Button name="archive" margin='2%' size={19} color="#42555e" backgroundColor="#f9f9f914" >
                <Text style={styles.fonteadicionar} >{estado ? estado : 'Novo'} </Text>
              </FontAwesome.Button>

              <FontAwesome.Button name="whatsapp" margin='1%' size={29} color="rgba(26, 137, 23, 1)" backgroundColor="#f9f9f914" >
                <Text style={styles.fonteadicionar} >Conversar  </Text>
              </FontAwesome.Button>
            </View>


          </View>


        </View>

      </View>


    </>
  );


  const renderItem = ({ item }) => (<Item
    id={item.id}
    titulo={item.titulo}
    preco={item.preco}
    descricao={item.descricao}
    estado={item.estado}
    url={item.url}
    id_anunciante={item.id_anunciante}

  />
  );



  return (
    <>
    <StatusBar backgroundColor="#000" translucent={true} />
    <View style={{ flexDirection: 'row' }} >


      <View style={styles.topo1} >
        <Image
          source={require('../../asset/logo_50.png')}
          resizeMode='cover'
          style={styles.head} />
      </View>
      <View style={styles.topo2} >
        <Text style={styles.textologo}>Anuncio360.com</Text>
      </View>

      < View style={styles.topo3} >
<FontAwesome.Button onPress={() =>  navigation.navigate('Login') } name="plus-circle" margin='2%' size={22} color="#42555e" backgroundColor="#9e9e9e00" >
  <Text style={styles.fonteadicionar} ></Text>
</FontAwesome.Button>
</View>
      
     
    </View>
 
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={getProdutos}
        onEndReachedThreshold={0.3}
        ListFooterComponent={<FooterList load={loadin} />}
        removeClippedSubviews={true} />
    </SafeAreaView>


  </>
);




function FooterList(load) {
  if (!load) return null
  return (
    <View>
      <ActivityIndicator style={styles.container} size={22} color="#121212" />

    </View>

  )
}



  //////////////
}