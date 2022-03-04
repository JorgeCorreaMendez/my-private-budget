import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import Colors from "../../constants/color";

const Movement = ({ description, date, movement }) => {
  const leftActions = () => {
    return (
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name="pencil" size={30} color="black" />
      </View>
    );
  };

  const rightActions = () => {
    return (
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name="trash" size={30} color="white" />
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={leftActions}
      renderRightActions={rightActions}
    >
      <View style={styles.containerMovement}>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <Text>{date}</Text>
        <Text style={styles.movement}>+{movement}€</Text>
      </View>
    </Swipeable>
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
