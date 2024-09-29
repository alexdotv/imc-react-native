import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IndexCalctulation from './components/IndexCalctulation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
       <IndexCalctulation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    paddingTop:20
  },
});