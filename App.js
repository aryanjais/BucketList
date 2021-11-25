import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./tabs/home";
import SearchTab from "./tabs/search";
import { Ionicons } from "@expo/vector-icons";
import {StyleSheet,ImageBackground} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ImageBackground source={require('./assets/oo.jpg')} resizeMode="cover" style={styles.image}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            labelPosition: "below-icon",
          }}
        >
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="Search" component={SearchTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },

});