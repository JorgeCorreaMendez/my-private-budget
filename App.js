import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";
import AddMovementsScreen from "./screens/AddMovementsScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [balance, setBalance] = useState(0);
  const [lastMovement, setLastMovement] = useState(0);
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

    setBalance(parseFloat(balance) + parseFloat(moviment.matter).toFixed(2));
    setLastMovement(parseFloat(moviment.matter).toFixed(2));
  };

  const deleteMovement = (moviment) => {
    setListMovements(
      listMovements.filter((actualMovement) => actualMovement !== moviment)
    );
  };

  let content = (
    <BudgetHomeScreen
      numberAccount={numberAccount}
      changeScreens={setScreen}
      listMovements={listMovements}
      actualBalance={balance}
      lastMoviment={lastMovement}
      deleteMovement={deleteMovement}
    />
  );

  if (screen === "add")
    content = (
      <AddMovementsScreen
        numberAccount={numberAccount}
        balance={balance}
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
