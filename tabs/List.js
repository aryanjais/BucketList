import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "../screens/List";

const Stack = createStackNavigator();

function ListTab() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="BucketList"
          options={{ headerShown: false }}
          component={ListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ListTab;