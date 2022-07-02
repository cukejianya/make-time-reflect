import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [highlight, onChangeHighlight] = React.useState('');
  const [height, onChangeHeight] = React.useState(1);
  const [focus, onChangeFocus] = React.useState(null);
  const [energy, onChangeEnergy] = React.useState(null);
  const [didTried, onChangeDidTried] = React.useState(null);
  const [toTry, onChangeToTry] = React.useState(null);
  const [grateful, onChangeGrateful] = React.useState(null);
  const date = new Date(new Date().toLocaleDateString());
 
  return (
    <View style={styles.container}>
      <Text>{date.toDateString()}</Text>
      <TextInput
        style={styles.highlight}
        onChangeText={onChangeHighlight}
        placeholder="What's today Highlight"
        value={highlight}
      />
      <Text>Did I make Time for it? Yes! No</Text>
      <View style={styles.score}>
        <Text>Focus: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFocus}
          value={focus}
          placeholder="1 - 10"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.score}>
        <Text>Energy: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEnergy}
          value={energy}
          placeholder="1 - 10"
          keyboardType="numeric"
        />
      </View>
      <Text>Things Tried Today:</Text>
      <View style={styles.score}>
        <Text>- </Text>
        <TextInput
          onChangeText={onChangeDidTried}
          value={didTried}
          multiline={true}
        />
      </View>
      <Text>Things to Try Tomorrow:</Text>
      <View style={styles.score}>
        <Text>- </Text>
        <TextInput
          onChangeText={onChangeToTry}
          value={toTry}
          multiline={true}
        />
      </View>
      <Text>Moment I'm grateful for:</Text>
      <View style={styles.score}>
        <Text>- </Text>
        <TextInput
          onChangeText={onChangeGrateful}
          value={grateful}
          multiline={true}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  highlight: {
    padding: 2,
  },
  score: {
    flexDirection: "row",
  },
  input: {
    paddingLeft: 2,
    paddingRight: 2,
    width: 40,
  }
});
