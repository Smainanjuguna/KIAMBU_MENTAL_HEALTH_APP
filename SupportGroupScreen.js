// SupportGroupScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Linking, Image, ImageBackground } from 'react-native';

export default function SupportGroupScreen() {
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    setResponse('yes');
    Linking.openURL('https://chat.whatsapp.com/EBHSOVfH7Z40s0zauyrNHE');
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <ImageBackground
      source={require('./assets/spg.jpg')} // Make sure this image exists
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Would you like to join a mental health support group?</Text>

          {!response && (
            <View style={styles.buttonGroup}>
              <View style={styles.buttonWrapper}>
                <Button title="Yes" onPress={handleYes} />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title="No" onPress={handleNo} color="gray" />
              </View>
            </View>
          )}

          {response === 'no' && (
            <Text style={styles.message}>
              FEEL LOVED 💖💙 TAKE CARE & KNOW THAT YOU'RE THE BEST
            </Text>
          )}
        </View>

        {/* Static Image Caption at the Bottom */}
        <View style={styles.staticButton}>
          <Text style={styles.staticText}>BYEE</Text>
          <Image
            source={require('./assets/wamatangi.jpg')} // Make sure this image exists
            style={styles.staticImage}
          />
          <Text style={styles.staticText}>GOVERNOR WAMATANGI CARES</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonWrapper: {
    marginHorizontal: 10,
    flex: 1,
  },
  message: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  staticButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  staticImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  staticText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
