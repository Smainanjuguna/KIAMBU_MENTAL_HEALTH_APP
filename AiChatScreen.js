import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';

export default function AiChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help?", sender: 'ai' },
  ]);
  const [loading, setLoading] = useState(false);

  const scrollViewRef = useRef();

  const API_KEY = 'AIzaSyCkytb0JAYPyMjrWivtCzegURPN84q-A_M'; 

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input.trim() }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const aiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I didn’t get that.';
      setMessages((prev) => [...prev, { text: aiText, sender: 'ai' }]);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch response from AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 80}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.chatContainer}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
        keyboardShouldPersistTaps="handled"
      >
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.sender === 'user' ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
        {loading && <ActivityIndicator size="small" color="#007bff" />}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask something..."
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  chatContainer: {
  padding: 15,
  paddingBottom: 120, // extra room for floating input
},
  messageBubble: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#d1ecf1',
    alignSelf: 'flex-end',
  },
  aiBubble: {
    backgroundColor: '#e2f0cb',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
  position: 'absolute',
  bottom: 40, // moves it up from the bottom
  left: 0,
  right: 0,
  flexDirection: 'row',
  padding: 10,
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderColor: '#ccc',
  zIndex: 10,
},
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
