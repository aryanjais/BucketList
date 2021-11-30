import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import HomeScreen from "./home";
// import firebase  from "../config";

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";





const StartingScreen = props => {
    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                console.log("user not signed in");
                // ...
            }
        });
    }, [])
   const signIn= ()=> {


        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try{
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }
        catch(e)
        {

        }
     
    }
    console.log(props);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/oo.jpg')} resizeMode="cover" style={styles.image}>
                <Card style={styles.inputContainer}>

                    <View style={styles.imageCardContainer}>
                        <Image source={require('../assets/logo3.png')} resizeMode="cover" style={styles.imagecard} />
                    </View>
                    <TextInput style={styles.Input}
                        placeholder="Username Or E-Mail" keyboardType="email-address" />

                    <TextInput style={styles.Input}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <View style={styles.button}>
                        <Button title="Login" onPress={signIn} />
                    </View>
                    <Button title="SignUp" onPress={() => { }} color="green" />
                </Card>
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    image: {
        flex: 1,
        justifyContent: "center",
        tintColor: "black",
        opacity:0.8
    },
    imagecontainer: {
        flex: 1,
        justifyContent: 'center'

    },
    Input: {
        paddingLeft: 1,
        width: "60%",
        backgroundColor: "#fff",
        marginBottom: 10,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1



    },
    Bold: {
        fontSize: 20,
        fontStyle: 'normal',
        padding: 15,

    },
    button: {
        padding: 2,
        borderRadius: 10,
        marginBottom: 5

    },
    inputContainer: {
        width: 300,
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 50,
        padding: 10,
        opacity:1


    },
    imageCardContainer: {
        borderRadius: 200,
        width: '70%',
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        height: 100,
        opacity:1
    },
    imagecard: {
        flex: 1,
        justifyContent: "center",
        opacity:1
    },
});

export default StartingScreen;