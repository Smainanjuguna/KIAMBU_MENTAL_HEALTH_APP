// SelfTestScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function SelfTestScreen() {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "Do you often feel sad or empty?",
    "Do you have trouble sleeping or sleep too much?",
    "Do you feel tired or have little energy?",
    "Do you feel hopeless about the future?",
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
