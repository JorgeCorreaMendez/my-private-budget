import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ placeholder, styleContainer, value, InputHandler, keyboardType, iconName }) => {
  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={25} color="black" />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={text => InputHandler(text)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    backgroundColor: "#DBDBDB",
    borderRadius: 5,
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  input: {
    paddingHorizontal: 20,
    height: 40,
    borderLeftWidth: 1,
    maxWidth: "85%"
  },
});
export default Input;
