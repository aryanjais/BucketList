import { useNavigation } from '@react-navigation/native';
import React, { useState,useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
// import { auth } from '../firebase';
// import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe =auth.onAuthStateChanged(user =>{
            if(user){
                navigation.navigate("HomeScreen")
            }
        })
        return unsubscribe
    }, [])

    const handleSignup = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log("Registerede with:",user.email)
        })

        .catch(error => alert(error.message))
    }
    const handleLogin =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log("Logged in with:",user.email)
        })

    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput placeholder="E-mail"
                    value={email} onChangeText={text =>setEmail(text)}
                    style={styles.input}
                />
                <TextInput placeholder="password"
                    value={password } onChangeText={text =>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignup} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"

    },
    inputContainer: {
        width: "80%"

    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5

    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,

    },
    button: {
        backgroundColor: "blue",
        width: "100%",
        // paddingHorizontal:15,
        padding: 15,
        borderRadius: 10,
        alignItems: "center"

    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "black",
        borderWidth: 2
    },
    buttonOutlineText: {
        color: "red",
        fontWeight: "700",
        fontSize: 16

    },
    buttonText: {
        color: "blue",
        fontWeight: "700",
        fontSize: 16
    }
});
