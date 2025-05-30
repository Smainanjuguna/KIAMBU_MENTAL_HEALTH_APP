
import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FactsScreen() {
  const navigation = useNavigation();

  const facts = [
    "Mental health affects how we think, feel, and act.",
    "1 in 4 people globally will be affected by mental disorders.",
    "Depression is one of the leading causes of disability worldwide.",
    "Youth are especially vulnerable to mental health issues.",
    "Talking about your feelings is a sign of strength, not weakness.",
    "Early intervention improves outcomes significantly.",
    "Mental health is just as important as physical health.",
  ];

  return (
    <ImageBackground
      source={require('./assets/brains.png')} // Adjust path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.overlay}>
          <Text accessibilityRole="header" style={styles.header}>
            Mental Health Facts
          </Text>
          <Text style={styles.intro}>
            Learn key facts about mental health to stay informed and help reduce stigma.
          </Text>

          {facts.map((fact, index) => (
            <View key={index} style={styles.factContainer}>
              <Text style={styles.fact}>
                <Text style={styles.factNumber}>{index + 1}. </Text>
                {fact}
              </Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AiChat')}>
          <Text style={styles.buttonText}>Learn More with AI</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    padding: 20,
    paddingBottom: 80, // add some space for the button
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  intro: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
  factContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  factNumber: {
    fontWeight: 'bold',
  },
  fact: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
