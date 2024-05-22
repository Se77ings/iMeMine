import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Button = ({ text }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.text} >{text}</Text>
    </View>
  );
};

const colors= ['#99eef7', '399f7af', '3dbf799', '#f7dc99', '#f7a299', '#ee99f7', '#f799ac']

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
    
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
    width: 200,
  },
  text: {
    fontSize: 16,
  }
});

export { Button };