import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default class App extends Component {
        constructor(props) {
            super(props);

            this.state = {
                response: [],
                user_namez: "",
                user_pazz: "",
            };
        }

        componentDidMount() {
            fetch('https://randomuser.me/api/?seed=1&results=10')
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                this.setState({ response: response.results});
            });
        }

        render() {
            return (
                <ScrollView style={styles.container}>
                    {
                        this.state.response.map((y) => {
                            return (
                              <View style={styles.box}>
                                <View style={styles.boxRow}>
                                    <Image source={{uri: y.picture.medium}} style={styles.avatar} />
                                    <View style={styles.boxcolumn}>
                                        <View style={styles.boxRow}>
                                          <Text style={styles.username}>{y.name.first}</Text>
                                          <Text>320 m</Text>
                                        </View>
                                        <Text>Genève, Suisse</Text>
                                        <View style={styles.labelBox}>
                                            <Text style={styles.label}>Coca-Cola enjoy</Text>
                                            <Text style={styles.label}>Coca-Cola</Text>
                                            <Text style={styles.label}>Coca-Cola</Text>
                                            <Text style={styles.label}>Coca-Cola</Text>
                                            <Text style={styles.label}>Coca-Cola</Text>
                                        </View>
                                    </View>
                                  </View>
                              </View>
                            );
                        })
                    }
                </ScrollView>
            );
        }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    backgroundColor: '#ccc'
  },
  box:{
    backgroundColor: '#fff',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    padding: 8,
  },
  boxRow:{
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  labelBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginTop: 5
  },
  label: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#000',
    paddingTop: 2,
    paddingBottom: 0,
    paddingLeft: 7,
    paddingRight: 4,
    marginBottom: 5,
    marginRight: 3,
  },
  avatar:{
    marginRight:10,
    width:80,
    height:80,
  },
  username:{
    fontSize: 20,
    flex: 1,
  },
  distance: {
    flex: 1, flexDirection: 'row', justifyContent: 'flex-end'
  },
  boxcolumn:{
    flexDirection: 'column',
    width: 200
  }
})