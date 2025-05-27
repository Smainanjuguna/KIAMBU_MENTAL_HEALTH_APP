// SelfTestScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function SelfTestScreen() {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

const questions = [
  "1. Do you often feel sad or empty?",
  "2. Do you have trouble sleeping or sleep too much?",
  "3. Do you feel tired or have little energy?",
  "4. Do you feel hopeless about the future?",
  "5. Do you find it difficult to concentrate or make decisions?",
  "6. Do you feel nervous or anxious often?",
  "7. Do you experience sudden mood swings or emotional outbursts?",
  "8. Do you avoid social interactions or isolate yourself?",
  "9. Do you feel worthless or excessively guilty?",
  "10. Do you find little or no pleasure in activities you usually enjoy?",
  "11. Do you have thoughts of self-harm or suicide?",
  "12. Do you use substances (alcohol, drugs) to cope with stress?",
  "13. Do you feel easily overwhelmed by daily responsibilities?",
  "14. Do you find it difficult to manage anger or frustration?",
];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const yesCount = answers.filter((a) => a === true).length;
    setScore(yesCount);
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Self-Test Kit</Text>
      {!submitted ? (
        <>
          {questions.map((q, i) => (
            <View key={i} style={styles.questionBlock}>
              <Text style={styles.question}>{q}</Text>
              <View style={styles.options}>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    answers[i] === true && styles.selected,
                  ]}
                  onPress={() => handleAnswer(i, true)}
                >
                  <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    answers[i] === false && styles.selected,
                  ]}
                  onPress={() => handleAnswer(i, false)}
                >
                  <Text>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <Button title="Submit" onPress={handleSubmit} disabled={answers.includes(null)} />
        </>
      ) : (
        <Text style={styles.result}>
          You answered "Yes" to {score} out of {questions.length} questions.{"\n"}
          {score >= 3
            ? "We recommend speaking to a mental health professional."
            : "Your responses don't suggest high distress, but always take care of your mental health."}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  questionBlock: { marginBottom: 15 },
  question: { fontSize: 16, marginBottom: 5 },
  options: { flexDirection: 'row', gap: 10 },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  selected: { backgroundColor: '#cde' },
  result: { fontSize: 18, marginTop: 30, textAlign: 'center' },
});
