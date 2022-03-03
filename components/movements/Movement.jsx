import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const Movement = ({ description, date, movement }) => {
  return (
    <View style={styles.containerMovement}>
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
      <Text>{date}</Text>
      <Text style={styles.movement}>+{movement}€</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMovement: {
    borderBottomColor: "#E3D8D9",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    paddingVertical: "5%",
    alignItems: "center",
  },
  description: {
    color: Colors.secundary,
    fontWeight: "bold",
    width: "30%",
  },
  movement: {
    color: "grey",
    fontSize: 18,
  },
});

export default Movement;
