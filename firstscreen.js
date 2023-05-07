import React from "react";
import { Button, View ,Text} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
       <View>
            <Button title="Go To About"
                onPress={() => navigation.navigate("About")}></Button>
        </View>
    );
}








