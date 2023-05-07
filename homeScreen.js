import React from "react";
import { Button, View ,Text} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{flex:1,alignItems:"center",justifyContent:"center",padding:50}}>Hii</Text>

            <Button title="Go To About"
                onPress={() => navigation.navigate("About")}></Button>
        </View>
    );
}
