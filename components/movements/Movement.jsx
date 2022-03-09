import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import Colors from "../../constants/color";

const Movement = ({ item, dropMovement, editMovement }) => {
  const leftActions = () => {
    return (
      <TouchableOpacity
        style={{ ...styles.buttonSwipeable, backgroundColor: "yellow" }}
        onPress={() => editMovement(item)}
      >
        <Ionicons name="pencil" size={30} color="black" />
      </TouchableOpacity>
    );
  };

  const rightActions = () => {
    return (
      <TouchableOpacity
        style={{ ...styles.buttonSwipeable, backgroundColor: "red" }}
        onPress={() => dropMovement(item)}
      >
        <Ionicons name="trash" size={30} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderLeftActions={leftActions}
      renderRightActions={rightActions}
    >
      <View style={styles.containerMovement}>
        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>
        <Text>{item.date}</Text>
        <Text style={styles.movement}>{item.matter}€</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  containerMovement: {
    borderBottomColor: "#E3D8D9",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: "5%",
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
  buttonSwipeable: {
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
  },
});

export default Movement;
