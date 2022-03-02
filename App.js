import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";

export default function App() {
  const numberAccount = parseInt(Math.random() * 9000) + 1000;

  return (
    <View style={styles.container}>
      <Header title="MyBudget" />
      <BudgetHomeScreen numberAccount={numberAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
});
