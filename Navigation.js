import React from "react";
import{createNativeStackNavigator} from"@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import homeScreen from "./project/HomeScreen";
import aboutScreen from "./project/AboutScreen";

const stacks = createNativeStackNavigator();
export default function App(){
    return(
       <NavigationContainer>
        <stacks.Navigator>
            <stacks.Screen name="Home" component={homeScreen}></stacks.Screen>
            <stacks.Screen name="about" component={aboutScreen}></stacks.Screen>
        </stacks.Navigator>
       </NavigationContainer>
    );
}