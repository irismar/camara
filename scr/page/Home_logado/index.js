import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import styles from '../Estilo';


export default function Home_logado ({ navigation, route }) {


  const [data, setData] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [anuncio_pagina, setAnuncio_pagina] = useState(1);
  const [loadin, setLoadin] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [logogin, setLogogin] = useState(false);
  const [id_anunciante, setId_anunciante] = useState(false);
  const [toktok, setToktok] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [tipo_negocio, setTipo_negocio] = useState(false);
  const[logout,setLogout]=useState(route.params?.logout)
  console.log('pagina  home')    
 
  useEffect(() => {
 
    async function dados_usuario  ()  {
      /////chamar codido usuario unico//////
      var id=await AsyncStorage.getItem('ID')
      if(id){ setId_anunciante(id)}
      var avar= await AsyncStorage.getItem('AVATAR')
      if(avar){ setAvatar(avar)}
      var tipo_negocio= await AsyncStorage.getItem('TIPO_NOGOCIO')
      if(tipo_negocio){
        if(tipo_negocio==='Automoveis'){

          setTipo_negocio('Automovel')
         }
       
         if(tipo_negocio==='Produto'){
       
          setTipo_negocio( 'Cadastro_produto')
         }
         if(tipo_negocio==='Local'){
       
          setTipo_negocio( 'Local')
         }
          if(tipo_negocio==='Imovel'){
       
          setTipo_negocio( 'Imovel')
         }
         
        
        
        
        
       }
   
    }
  
    dados_usuario()


    getProdutos()
  
    
  }, []);

  async function getProdutos( shouldRefresh = false) {
 
  
    if (loadin) return;

    setLoadin(true);
    setAnuncio_pagina(1)
    await fetch("https://anuncio360.com/projeto/exibir.php?pagina=" + pagina)
      .then((response) => response.json())
      .then((responseJson) => (
    
        // console.log(responseJson),
        setData(shouldRefresh ? data :[...data, ...responseJson]),
        setLoadin(false)

      ));
    setPagina(pagina + 1);

    //console.log(data);
  }  

  async function refreshList() {
    setRefreshing(true);
    
    await getProdutos( true);

    setRefreshing(false);
  }


  const Item = ({ titulo, id, preco, descricao, estado, url }) => (

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
    url={item. urlcode}

  />
  );



  return (
    <>
    <StatusBar backgroundColor="#000" translucent={true} />
    <View style={{ flexDirection: 'row' }} >


      <View style={styles.topo1} >
        <Image
         source={  {uri: avatar ? avatar:'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg' }}
          resizeMode='cover'
          style={styles.head} />
      </View>
      <View style={styles.topo2_login} >
        <Text style={styles.textologo}>Anuncio360.com</Text>
      </View>
     
      < View style={styles.topo3_login} >
<FontAwesome.Button onPress={() =>navigation.navigate(tipo_negocio, {id_anunciante:id_anunciante}) } name="plus-circle" margin='2%' size={29} color="#42555e" backgroundColor="#9e9e9e00" >
</FontAwesome.Button>
</View>
      
< View style={styles.topo3_login} >
<FontAwesome.Button onPress={() =>navigation.navigate('Configuracao') } name="cogs" margin='2%' size={20} color="#42555e" backgroundColor="#9e9e9e00" >
          <Text style={styles.fonteadicionar} > </Text>
        </FontAwesome.Button>
      </View>
    </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
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