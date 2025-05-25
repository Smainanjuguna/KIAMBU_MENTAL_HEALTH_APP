// FactsScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function FactsScreen() {
  const facts = [
    "1. Mental health affects how we think, feel, and act.",
    "2. 1 in 4 people globally will be affected by mental disorders.",
    "3. Depression is one of the leading causes of disability worldwide.",
    "4. Youth are especially vulnerable to mental health issues.",
    "5. Talking about your feelings is a sign of strength, not weakness.",
    "6. Early intervention improves outcomes significantly.",
    "7. Mental health is just as important as physical health.",
    "8. Stigma prevents people from seeking help—let's break it.",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mental Health Facts</Text>
      {facts.map((fact, index) => (
        <Text key={index} style={styles.fact}>{fact}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fact: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
});
