import React from "react";
import { Button, View,Text} from "react-native";

export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
         <Text style={{flex:1,alignItems:"center",justifyContent:"center",padding:50}}>Hello</Text>

            <Button title="Click Me"
                onPress={() => navigation.navigate("Image")}></Button>
        </View>
    );
}
