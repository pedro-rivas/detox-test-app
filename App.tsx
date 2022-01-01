import React, {useState,} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TextInput,
} from 'react-native';

import {multiply} from './src/actions/';

export default function App() {
  const [number, setNumber] = useState('');
  const [results, setResults] = useState<number[]>([]);

  const onChange = (val: string) => setNumber(val);

  function multiplySmth() {
    const n = +number;
    const result = multiply(n);
    setResults([...results, result]);
  }

  return (
    <SafeAreaView style={styles.mainGrap}>
      <ScrollView
        testID="scrollview"
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>Multiply something</Text>
        <TextInput
          testID="numericInput"
          style={styles.input}
          onChangeText={onChange}
          placeholder="Type a number"
          keyboardType="numeric"
        />
        <Button
          testID="multiplyButton"
          title="Multiply"
          onPress={multiplySmth}
          disabled={number != '' ? false : true}
        />
        <Text>Results</Text>
        {results.length > 0
          ? results.map((result, i) => (
              <Text key={i} style={styles.result}>
                {result}
              </Text>
            ))
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    paddingVertical: 20,
  },
  scrollView: {
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    paddingVertical: 10,
  },
});
