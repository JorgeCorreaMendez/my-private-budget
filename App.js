import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";
import AddMovementsScreen from "./screens/AddMovementsScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [listMovements, setListMovements] = useState([]);
  const numberAccount = parseInt(Math.random() * 9000) + 1000;

  const addToListMovements = (moviment) => {
    setListMovements((currentMovements) => [
      ...currentMovements,
      {
        key: Math.random().toString(),
        description: moviment.description,
        matter: moviment.matter,
        date: moviment.date,
      },
    ]);
  };

  
  let content = (
    <BudgetHomeScreen numberAccount={numberAccount} changeScreens={setScreen} />
  );

  if (screen === "add")
    content = (
      <AddMovementsScreen
        numberAccount={numberAccount}
        balance={-10}
        changeScreens={setScreen}
        addMovements={addToListMovements}
      />
    );

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
});
