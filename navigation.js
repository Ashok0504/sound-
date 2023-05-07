import React from "react";
import{createNativeStackNavigator} from"@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import firstscreen from "../ManageExpensive/firstscreen";
import SecondScreen from "../ManageExpensive/SecondScreen";

const stacks = createNativeStackNavigator();
export default function App(){
    return(
       <NavigationContainer>
        <stacks.Navigator>
            <stacks.Screen name="first" component={firstscreen}></stacks.Screen>
            <stacks.Screen name="about" component={SecondScreen}></stacks.Screen>
        </stacks.Navigator>
       </NavigationContainer>
    );
    }