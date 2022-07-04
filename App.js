import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const date = new Date(new Date().toLocaleDateString());
  const [highlight, onChangeHighlight] = React.useState('');
  const [focus, onChangeFocus] = React.useState(0);
  const [energy, onChangeEnergy] = React.useState(0);
  const [didTried, onChangeDidTried] = React.useState([]);
  const [toTry, onChangeToTry] = React.useState([]);
  const [grateful, onChangeGrateful] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = JSON.parse(await AsyncStorage.getItem(date.toDateString()));
      onChangeHighlight(data.highlight)
      onChangeFocus(data.focus)
      onChangeEnergy(data.energy)
      onChangeDidTried(data.didTried)
      onChangeToTry(data.toTry)
      onChangeGrateful(data.grateful)
    }
    getData().catch(console.error);;
  }, []);

  const data = {
    highlight,
    focus,
    energy,
    didTried,
    toTry,
    grateful,
  };

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
      <Button
        onPress={() => {
          AsyncStorage.setItem(date.toDateString(), JSON.stringify(data));
        }}
        title="Save"
        color="#841584"
      />
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
