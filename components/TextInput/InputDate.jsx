import { LogBox, View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";

const InputDate = ({ styleContainer, value, InputHandler }) => {
  // Ignorar warningnuseNativeDriver
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <View style={styles.iconContainer}>
        <Ionicons name="calendar" size={25} color="black" />
      </View>

      <DatePicker
        date={value}
        style={styles.datePickerStyle}
        mode="date"
        placeholder="seleccione una fecha"
        format="DD/MM/YYYY"
        minDate="01-01-1900"
        cancelBtnText="Cancelar"
        confirmBtnText="Confirmar"
        showIcon={false}
        customStyles={customStyles}
        onDateChange={(newDate) => {
          InputHandler(newDate);
        }}
      />
    </View>
  );
};

const customStyles = StyleSheet.create({
  dateInput: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    borderLeftWidth: 1,
    borderLeftColor: "black",
    borderWidth: 0,
    backgroundColor: "#DBDBDB",
  },
  placeholderText: {
    color: "#AFAFAF",
  },
});

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
});
export default InputDate;
