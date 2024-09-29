import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

const IndexCalculation = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [index, setIndex] = useState(null);
  const [indexStatus, setIndexStatus] = useState('');

  const handleCalculation = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue)) {
      Alert.alert('Пожалуйста, введите корректные числа');
      return;
    }

    if (heightValue <= 0) {
      Alert.alert('Рост должен быть больше нуля');
      return;
    }

    if (weightValue <= 0) {
      Alert.alert('Вес должен быть больше нуля');
      return;
    }

    const result = weightValue / (heightValue * heightValue);

    if (result < 16) {
      setIndexStatus('Недостаток веса');
    } else if (result >= 16 && result < 26) {
      setIndexStatus('Норма');
    } else if (result >= 26 && result < 50) {
      setIndexStatus('Ожирение');
    }

    setIndex(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Рост (в метрах):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Введите Ваш рост..."
        value={height}
        onChangeText={setHeight}
      />
      <Text>Вес (в килограммах):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Введите Ваш вес..."
        value={weight}
        onChangeText={setWeight}
      />
      {index !== null && <Text>Ваш ИМТ: {index}</Text>}
      {indexStatus !== '' && <Text>{indexStatus}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleCalculation}>
        <Text style={styles.buttonText}>
          Рассчитать
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start', 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 10,
  },
  button: {
    height: 40,
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#458f4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default IndexCalculation;
