import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createS } from "@react-navigation/native"
import HomeTab from "./tabs/home";
import SearchTab from "./tabs/search";
import ListTab from "./tabs/List";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import StartingScreen from "./screens/StartingScreen";
import firebase from 'firebase/compat/app';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./tabs/home";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyA9wwkP_B0SWUkq9DhIZHnjgSeW_k_d84o",
  authDomain: "movie-9f52f.firebaseapp.com",
  projectId: "movie-9f52f",
  storageBucket: "movie-9f52f.appspot.com",
  messagingSenderId: "902837622462",
  appId: "1:902837622462:web:7eff711497368f6587f0ef",
  measurementId: "G-KJSYLV3PE6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function App() {
  // Import the functions you need from the SDKs you need

  return (
    // <LoginScreen>
      <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search-outline";
              } else if (route.name === "BucketList") {
                iconName = focused ? "list" : "ios-list-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },

          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "black",
            labelPosition: "below-icon",
          }}
        >
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="Search" component={SearchTab} />
          <Tab.Screen name="BucketList" component={ListTab} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },

});