import { View, Text, StyleSheet } from "react-native";

const CardBalance = ({ numberAccount, actualBalance, lastBalance }) => {
  let colorBalance;

  if (actualBalance < 0) {
    colorBalance = "red";
  } else {
    colorBalance = "black";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.carTitle}>Cuenta *{numberAccount}</Text>
      <View style={styles.balanceData}>
        <Text style={{ fontSize: 20, color: colorBalance }}>
          {actualBalance}€
        </Text>
        <Text style={{ fontSize: 20 }}>{lastBalance}€</Text>
      </View>
      <View style={styles.balanceData}>
        <Text>Saldo disponible</Text>
        <Text>Ultimo movimiento</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginVertical: "10%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    elevation: 5,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowOffset: { height: 10, width: 10 },
  },
  carTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  balanceData: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CardBalance;
