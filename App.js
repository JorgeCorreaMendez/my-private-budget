import { StyleSheet, View } from 'react-native';
import CardBalance from './components/CardBalance';
import Header from './components/Header';

export default function App() {
  const numberAccount = parseInt(Math.random() * 9000) + 1000;

  return (
    <View style={styles.container}>
      <Header title="MyBudget"/>
      <CardBalance numberAccount={numberAccount} actualBalance="10.05" lastBalance="2.00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: '#F4F4F4'
  }
});
