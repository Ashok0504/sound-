import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require('C:/Users/Ashok/ManageExpensive/react native image.png')}
      style={{width:145,height:130}}
      />
      <Text style={styles.text}> Welcome to React Native</Text>
      <Text style={styles.text}> JavaScript Framework</Text>
       <Text style={styles.input}>
       React Native for Web can be used for multi-platform and web-only applications.
       It can be incrementally adopted by existing React Web apps and integrated with 
       existing React Native apps. Preact is also supported.
       </Text>


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
  },
  text:{
    fontSize:20,
    padding:10,
    color:'#fff'
    
  },
  input:{
    fontSize:20,
    padding:10,
    marginLeft:10,
    color:'#fff'

  }


})