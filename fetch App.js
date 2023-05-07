import { StyleSheet, Text, View } from 'react-native';
import FetchData from './imagefetch/index'
export default function App() {
  return (
    <View style={styles.container}>
     <FetchData/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});