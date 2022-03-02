import { Text, View, StyleSheet } from "react-native";
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
        <Text>helo</Text>
        <Text>helo</Text>
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
  },
});

export default BudgetHomeScreen;
