import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";
import AddMovementsScreen from "./screens/AddMovementsScreen";

export default function App() {
  const [numberAccount] = useState(parseInt(Math.random() * 9000) + 1000);
  const [screen, setScreen] = useState("home");
  const [balance, setBalance] = useState(0);
  const [lastMoviment, setLastMovement] = useState(0);
  const [listMoviments, setListMovements] = useState([]);
  const [editMoviment, setEditMoviment] = useState({});

  useEffect(() => {
    if (listMoviments.length !== 0) {
      setBalance(
        listMoviments
          .map((item) => item.matter)
          .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr))
      );
    }
  });

  const addToListMovements = (moviment) => {
    if (editMoviment.key === undefined) {
      setListMovements((currentMovements) => [
        ...currentMovements,
        {
          key: Math.random().toString(),
          description: moviment.description,
          matter: moviment.matter,
          date: moviment.date,
        },
      ]);

      setLastMovement(parseFloat(moviment.matter).toFixed(2));
    } else {
      let movementIndex = listMoviments
        .map((actualMovemen) => actualMovemen.key)
        .indexOf(moviment.key);

      const newListMovement = [...listMoviments];
      newListMovement[movementIndex] = moviment;

      setListMovements(newListMovement);
    }

    setEditMoviment({});
  };

  const onEditMoviment = (moviment) => {
    setEditMoviment(moviment);
    setScreen("add");
  };

  const deleteMoviment = (moviment) => {
    setListMovements(
      listMoviments.filter((actualMovement) => actualMovement !== moviment)
    );

    setBalance(parseFloat(balance) - parseFloat(moviment.matter).toFixed(2));
  };

  const reset = () => {
    setBalance(0);
    setListMovements([]);
  };

  let content = (
    <BudgetHomeScreen
      numberAccount={numberAccount}
      restart={reset}
      changeScreens={setScreen}
      listMovements={listMoviments}
      actualBalance={balance}
      lastMoviment={lastMoviment}
      deleteMoviment={deleteMoviment}
      editMoviment={onEditMoviment}
    />
  );

  if (screen === "add")
    content = (
      <AddMovementsScreen
        numberAccount={numberAccount}
        balance={balance}
        changeScreens={setScreen}
        addMovements={addToListMovements}
        value={editMoviment}
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
