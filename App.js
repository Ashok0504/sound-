import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpensive from './money Expensive/manage';
import AllExpensive from './money Expensive/All Expensive';
import RecentExpensive from './money Expensive/Recent Expensive';
import { GlobalStyles } from './money Expensive/GlobalStyles';



const Stack =createNativeStackNavigator();
const Bottomtabs = createBottomTabNavigator();
function ExpensesOverview()
{
  return (
    <Bottomtabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
    <Bottomtabs.Screen name ="RecentExpensive" component={RecentExpensive}/>
    <Bottomtabs.Screen name ="AllExpensive" component={AllExpensive}/>
  </Bottomtabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options ={{headerShown : false}}/>
        <Stack.Screen name="ManageExpensive" component={ManageExpensive}/>
      </Stack.Navigator>c
     </NavigationContainer>
     </>
  );
}
