import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import CardBalance from "../components/CardBalance";
import Colors from "../constants/color";
import MovementList from "../components/moviments/MovimentsList";

const BudgetHomeScreen = ({
  numberAccount,
  changeScreens,
  restart,
  actualBalance,
  lastMoviment,
  listMovements,
  deleteMoviment,
  editMoviment
}) => {
  return (
    <View style={styles.container}>
      <Header title="MyBudget" />
      <CardBalance
        numberAccount={numberAccount}
        actualBalance={actualBalance}
        lastBalance={lastMoviment}
      />

      <View style={styles.optionBalance}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => changeScreens("add")}
        >
          <Ionicons name="add-circle-outline" size={32} color="white" />
          <Text style={{ color: "white" }}>Añadir movimientos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => restart()}
        >
          <Ionicons name="reload-circle-outline" size={32} color="white" />
          <Text style={{ color: "white" }}>Reiniciar Cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>MOVIMIENTOS</Text>
      </View>
      <MovementList
        list={listMovements}
        dropMoviment={deleteMoviment}
        editMoviment={editMoviment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  optionBalance: {
    backgroundColor: Colors.secundary,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 80,
    marginBottom: "5%",
  },
});

export default BudgetHomeScreen;
