import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
 
  return (
    <View style={styles.container}>
      <Text>Today's Highlight:</Text> <TextInput onChangeText={onChangeText} value={text} />
      <Text>Did I make Time for it? Yes! No</Text>
      <Text>Focus: 4</Text>
      <Text>Energy: 7</Text>
      <Text>Moment I'm greatful for:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
