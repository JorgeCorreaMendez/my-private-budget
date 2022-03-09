import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import {} from "react-native-gesture-handler";

const InputDate = ({ styleContainer, value, InputHandler }) => {
  const [date, setDate] = useState(new Date(value || Date.now()));
  const [show, setShow] = useState(false);
  const local = "es-ES";

  const onChangeDate = (event, selectedDate) => {
    const actualData = selectedDate || date;

    setDate(actualData);
    setShow(false);
    InputHandler(actualData.toLocaleDateString(local));
  };

  const androidPickerDate = () => {
    return (
      <View style={styles.dateContainerAndroid}>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text>{date.toLocaleDateString(local)}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePickerAndroid"
            style={styles.dateInput}
            value={date}
            onChange={onChangeDate}
          />
        )}
      </View>
    );
  };

  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <View style={styles.iconContainer}>
        <Ionicons name="calendar" size={25} color="black" />
      </View>
      <View style={styles.dateContainer}>
        {Platform.OS !== "ios" ? (
          androidPickerDate()
        ) : (
          <DateTimePicker
            testID="dateTimePickerIos"
            style={styles.dateInput}
            value={date}
            locale={local}
            display="spinner"
            onChange={onChangeDate}
          />
        )}
      </View>
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
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    borderLeftWidth: 1,
    height: "100%",
  },
  dateContainerAndroid: {
    height: 40,
    paddingLeft: 20,
    justifyContent: "center",
  },
  date: {
    maxWidth: "85%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dateInput: {
    flex: 1,
    height: 150,
  },
});
export default InputDate;
