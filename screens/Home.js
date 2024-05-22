import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, StyleSheet } from 'react-native';

const backgroundImg = require('../assets/background.jpg'); // Certifique-se de substituir pelo caminho correto

const Home = ({ navigation }) => {
  const verifier = (type) => {
    console.log(type);
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={{ fontSize: 20, marginBottom: 25 }}>
          All through the day!
        </Text>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => verifier("correct")}>
          <Button text="I me mine" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => verifier("incorrect")}>
          <Button text="I mine me" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => verifier("incorrect")}>
          <Button text="Mine i me" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => verifier("incorrect")}>
          <Button text="Me mine i" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.invisibleElement}
        onPress={() => navigation.navigate('Second')}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invisibleElement: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
});

const Button = ({ text }) => (
  <View style={styles.button}>
    <Text>{text}</Text>
  </View>
);

export default Home;
