import React from "react";
import {View,Text,StyleSheet} from 'react-native';


const LoginScreen = props=>{
    return(
        <View style={styles.container}>
            <Text>Login to my App</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }

});

export default LoginScreen;