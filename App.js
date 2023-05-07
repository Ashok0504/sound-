import { View, Text ,StyleSheet,TextInput,Button} from 'react-native'
import{createNativeStackNavigator} from"@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import secoundscreen from "../ManageExpensive/secoundscreen";
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';


const stacks = createNativeStackNavigator();

       <NavigationContainer>
        <stacks.Navigator>
            <stacks.Screen name="secound" component={secoundscreen}></stacks.Screen>
           <Text></Text>
        </stacks.Navigator>
       </NavigationContainer>
const AddData = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [name,setname]=useState('');
    
const dataAddon =()=>
{
    
    setTitle('')
    setBody('')
    setname('')
}

  return ( 
    <View style= {styles.container}>  
      <TextInput
      placeholder='username'
      value ={title}
      onChangeText={(text)=> setTitle(text)
       
    } style={styles.input} 
      />
         <TextInput
      placeholder='email'
      value ={body}
      onChangeText={(text)=> setBody(text)
   
}
style={styles.input} 
      />
         <TextInput
      placeholder='age'
      value ={name}
      onChangeText={(text)=> setname(text)
   
}
style={styles.input}
  />
  <TouchableOpacity>
      <Button 
        title ='Submit'
        onPress={() => navigation.navigate("secoundscreen")}></Button>
</TouchableOpacity>


      </View>
   

  )
}

export default AddData

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor:'#9BC1AA'
        
      },
      header: {
        fontSize: 5,
        padding: 24,
        marginTop: 120,
        fontWeight:'Bold',
        textAlign: "center",
      },
      
    
      input: {
        borderwidth :1,
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        paddingRight: 30,
        margin :10,
        padding:10,
        borderRadius:6,
      }
    });