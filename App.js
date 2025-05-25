import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Button } from 'react-native';
import FactsScreen from './FactsScreen';
import SelfTestScreen from './SelfTestScreen';



const Stack = createNativeStackNavigator();

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to Group 10 Mental Health App</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Menu</Text>
      <Button title="Mental Health Facts" onPress={() => navigation.navigate('Facts')} />
      <Button title="Self-Test Kit" onPress={() => navigation.navigate('SelfTest')} />
      <Button title="Find a Doctor Near You" onPress={() => {}} />
      <Button title="Join Mental Health Support Group" onPress={() => {}} />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Facts" component={FactsScreen} /> 
        <Stack.Screen name="SelfTest" component={SelfTestScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
