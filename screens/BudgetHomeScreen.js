import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Movement from "../components/movements/Movement";
import CardBalance from "../components/CardBalance";
import Colors from "../constants/color";

const BudgetHomeScreen = ({ numberAccount, changeScreens }) => {
  return (
    <View style={styles.container}>
      <Header title="MyBudget" />
      <CardBalance
        numberAccount={numberAccount}
        actualBalance={-10.05}
        lastBalance="2.00"
      />

      <View style={styles.optionBalance}>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => changeScreens("add")}>
          <Ionicons name="add-circle-outline" size={32} color="white" />
          <Text style={{ color: "white" }}>Añadir movimientos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => changeScreens("reset")}>
          <Ionicons name="reload-circle-outline" size={32} color="white" />
          <Text style={{ color: "white" }}>Reiniciar Cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>MOVIMIENTOS</Text>
      </View>
      <ScrollView style={{ width: "100%", height: "50%" }}>
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
        <Movement
          description="movimiento1"
          date="11-12-2002"
          movement="20.00"
        />
      </ScrollView>
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
