import { StyleSheet, Text, View,TouchableOpacity,TextInput ,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const [ searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
            <Text style={styles.input}>Delivery </Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Text style={styles.input}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}} >
         <TouchableOpacity style={{margin:10}} >
           <Image
             source={require('C:/Users/Ashok/ManageExpensive/download.png')}
             style={{ width: 60, height: 60 }} 
           />
           <Text>Bakery Items</Text> 
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}} >
           <Image
             source={require('C:/Users/Ashok/ManageExpensive/co.png')}
             style={{ width: 60, height: 60 }}   
           /> 
           <Text>Soft Drinks</Text> 
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}} >
           <Image
            source={require('C:/Users/Ashok/ManageExpensive/coffee.jpeg')}
            style={{ width: 60, height: 60 }}  
           /> 
           <Text>Coffee & Tea</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}}>
           <Image
             source={require('C:/Users/Ashok/ManageExpensive/pizza.png')}
             style={{ width: 60, height: 60 }} 
           /> 
           <Text>Pizza </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}}>
           <Image
              source={require('C:/Users/Ashok/ManageExpensive/sweet images.jpeg')}
              style={{ width: 60, height: 60 }} 
                       /> 
           <Text>Sweets Items</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <Icon name="map-marker" size={22} color='black' style={styles.mapIcon} />
        <TextInput
         style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search"
        />
      </View>
      
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    
  },
  input:{
    borderwidth :1,
    paddingRight: 10,
    margin :20,
    padding:10, 
    borderRadius:10,
    backgroundColor:'#E2F4F7',
    fontWeight:'bold',
    textAlign:'center',
    alignItems:'center'
    
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingLeft: 10,
    shadowRadius: 2,
    width:500,
    
  },
  mapIcon: {
    marginRight: 3,
  },
  searchInput:{
    flex: 2,
    height: 25,
    borderRadius:17,
    fontSize:10
  },
  coins:{
    textAlign:'center',
    fontSize:20
  }

})
