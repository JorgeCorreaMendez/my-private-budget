import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BudgetHomeScreen from "./screens/BudgetHomeScreen";
import AddMovementsScreen from "./screens/AddMovementsScreen";

export default function App() {
  const [numberAccount] = useState(parseInt(Math.random() * 9000) + 1000);
  const [screen, setScreen] = useState("home");
  const [balance, setBalance] = useState(0);
  const [lastMovement, setLastMovement] = useState(0);
  const [listMovements, setListMovements] = useState([]);
  const [editMovement, setEditMovement] = useState({});

  useEffect(() => {
    if (listMovements.length !== 0) {
      setBalance(
        listMovements
          .map((item) => item.matter)
          .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr))
      );
    }
  }, [listMovements]);

  const addToListMovements = (movement) => {
    if (editMovement.key === undefined) {
      setListMovements((currentMovements) => [
        ...currentMovements,
        {
          key: Math.random().toString(),
          description: movement.description,
          matter: movement.matter,
          date: movement.date,
        },
      ]);

      setLastMovement(parseFloat(movement.matter).toFixed(2));
    } else {
      let movementIndex = listMovements
        .map((actualMovemen) => actualMovemen.key)
        .indexOf(movement.key);

      const newListMovement = [...listMovements];
      newListMovement[movementIndex] = movement;

      setListMovements(newListMovement);
    }

    setEditMovement({});
  };

  const onEditMovement = (movement) => {
    setEditMovement(movement);
    setScreen("add");
  };

  const deleteMovement = (movement) => {
    setListMovements(
      listMovements.filter((actualMovement) => actualMovement !== movement)
    );

    setBalance(parseFloat(balance) - parseFloat(movement.matter).toFixed(2));
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
      listMovements={listMovements}
      actualBalance={balance}
      lastMovement={lastMovement}
      deleteMovement={deleteMovement}
      editMovement={onEditMovement}
    />
  );

  if (screen === "add")
    content = (
      <AddMovementsScreen
        numberAccount={numberAccount}
        balance={balance}
        changeScreens={setScreen}
        addMovements={addToListMovements}
        value={editMovement}
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
