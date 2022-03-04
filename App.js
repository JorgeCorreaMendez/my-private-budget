import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";
import AddMovementsScreen from "./screens/AddMovementsScreen"

export default function App() {
  const [screen, setScreen] = useState("home");
  const numberAccount = parseInt(Math.random() * 9000) + 1000;

  let content = <BudgetHomeScreen numberAccount={numberAccount} changeScreens={setScreen} />

  if(screen === "add")
    content = <AddMovementsScreen/>

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
});
