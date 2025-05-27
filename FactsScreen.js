import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

export default function FactsScreen() {
  const facts = [
    "Mental health affects how we think, feel, and act.",
    "1 in 4 people globally will be affected by mental disorders.",
    "Depression is one of the leading causes of disability worldwide.",
    "Youth are especially vulnerable to mental health issues.",
    "Talking about your feelings is a sign of strength, not weakness.",
    "Early intervention improves outcomes significantly.",
    "Mental health is just as important as physical health.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Stigma prevents people from seeking help—let's break it.",
    "Talking about your feelings is a sign of strength, not weakness.",
    "1 in 4 people globally will be affected by mental disorders.",
    "1 in 4 people globally will be affected by mental disorders.",
    "1 in 4 people globally will be affected by mental disorders.",
    "1 in 4 people globally will be affected by mental disorders.",
  ];

  return (
    <ImageBackground
      source={require('./assets/kl.jpg')} // Adjust path to your image
      style={styles.background}
      resizeMode="cover"
    >
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // light transparent overlay for readability
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  intro: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  factContainer: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  fact: {
    fontSize: 16,
    lineHeight: 22,
  },
  factNumber: {
    fontWeight: 'bold',
    color: '#333',
  },
});
