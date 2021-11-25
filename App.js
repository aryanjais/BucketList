import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Button } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/oo.jpg')} resizeMode="cover" style={styles.image}>
        <Card style={styles.inputContainer}>

          <View style={styles.imageCardContainer}>
          <Image source={require('./assets/logo3.png')} resizeMode="cover" style={styles.imagecard} />
          </View>
          <TextInput style={styles.Input}
            placeholder="Username Or E-Mail" />

          <TextInput style={styles.Input}
            placeholder="Password"
            secureTextEntry
          />
          <Button title="Login" />
        </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center'

  },
  Input: {
    paddingLeft:1,
    width: "60%",
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop:10,
    borderColor:'black',
    borderWidth:1



  },
  Bold: {
    fontSize: 20,
    fontStyle: 'normal',
    padding: 15,

  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 10,
    borderRadius: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 50,
    padding:10


  },
  imageCardContainer: {
    borderRadius: 200,
    width: '70%',
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    height:100,
  },
  imagecard: {
    flex: 1,
    justifyContent: "center"
  },


});
