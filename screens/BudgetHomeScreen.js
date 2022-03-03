import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CardBalance from "../components/CardBalance";
import Colors from "../constants/color";

const BudgetHomeScreen = ({ numberAccount }) => {
  return (
    <View style={styles.container}>
      <CardBalance
        numberAccount={numberAccount}
        actualBalance={-10.05}
        lastBalance="2.00"
      />

      <View style={styles.optionBalance}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Añadir movimientos</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", paddingLeft: 15 }}>
        <Text style={{ fontWeight: "bold" }}>Movimientos</Text>
      </View>
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
    height: "20%",
    marginBottom: "5%",
  },
});

export default BudgetHomeScreen;
