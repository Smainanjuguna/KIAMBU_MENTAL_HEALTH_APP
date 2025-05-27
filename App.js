import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import FactsScreen from './FactsScreen';
import SelfTestScreen from './SelfTestScreen';
import FindDoctorScreen from './FindDoctorScreen';
import SupportGroupScreen from './SupportGroupScreen';
import { FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function LandingPage({ navigation }) {
  return (
    <View style={styles.landingContainer}>
      <Text style={[styles.title, { backgroundColor: 'purple', color: 'white', padding: 10 }]}>
       WELCOME KIAMBU MENTAL HEALTH APP
      </Text>

      <Image
        source={require('./assets/applogo.jpg')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Menu')}
          color="#007bff"
        />
      </View>
    </View>
  );
}
function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Centered content */}
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>Menu</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Facts')}>
          <FontAwesome5 name="brain" size={28} color="#007bff" />
          <Text style={styles.menuText}>Mental Health Facts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SelfTest')}>
          <MaterialCommunityIcons name="clipboard-text" size={28} color="#007bff" />
          <Text style={styles.menuText}>Self-Test Kit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindDoctor')}>
          <Entypo name="location-pin" size={28} color="#007bff" />
          <Text style={styles.menuText}>Find a Doctor Near You</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SupportGroup')}>
          <MaterialCommunityIcons name="account-group" size={28} color="#007bff" />
          <Text style={styles.menuText}>Join Mental Health Support Group</Text>
        </TouchableOpacity>
      </View>
        {/* Spacer to push bottom text down */}
      <View style={{ flex: 1 }} />

      {/* Footer text at the bottom */}
      <Text style={styles.bottomText}>You are worthy of happiness and peace of mind</Text>
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
        <Stack.Screen name="FindDoctor" component={FindDoctorScreen} />
        <Stack.Screen name="SupportGroup" component={SupportGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
  content: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
 image: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1, 
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 30,
  },
 container: {
  flex: 1,
  backgroundColor: 'purple',
  padding: 20,
  justifyContent: 'center',
},
 menuTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
},
menuItem: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 14,
  marginVertical: 12, 
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  paddingHorizontal: 16,
},
menuText: {
  fontSize: 16,
  marginLeft: 10,
},
buttonWrapper: {
  marginVertical: 20, 
  width: '100%',      
  paddingHorizontal: 20,
},
bottomText: {
  textAlign: 'center',
  fontSize: 16,
  padding: 15,
  color: '#fff',
  backgroundColor: '#6c3483', 
},
});