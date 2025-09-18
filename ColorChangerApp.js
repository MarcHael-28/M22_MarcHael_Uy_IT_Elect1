import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="White"
          onPress={() => setBackgroundColor('#ffffff')}
          color="#34495e"
        />
        <Button
          title="SkyBlue"
          onPress={() => setBackgroundColor('skyblue')}
          color="skyblue"
        />
        <Button
          title="Green"
          onPress={() => setBackgroundColor('green')}
          color="green"
        />
        <Button
          title="blue"
          onPress={() => setBackgroundColor('blue')}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2c3e50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
});

export default ColorChangerApp;