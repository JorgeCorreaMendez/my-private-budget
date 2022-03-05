import { Alert, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import InputDate from "../components/TextInput/InputDate";
import Colors from "../constants/color";
import Header from "../components/Header";
import Input from "../components/TextInput/Input";

const AddMovementsScreen = ({
  numberAccount,
  value,
  balance,
  addMovements,
  changeScreens,
}) => {
  const [description, setDescriptionr] = useState(value.description);
  const [matter, setMatter] = useState(value.matter);
  const [date, setDate] = useState(value.date);

  const descriptionInputHandler = (inputText) => {
    setDescriptionr(inputText);
  };

  const matterInputHandler = (inputText) => {
    setMatter(inputText.replace(/[^\d.]/g, ""));
  };

  const dateInputHandler = (inputText) => {
    setDate(inputText);
  };

  const newMovement = (typeMatter) => {
    setMatter(parseFloat(matter));

    if (isNaN(matter) || date === "" || description === "") {
      Alert.alert("Error", "Debe introducir todos los campos correctamente", [
        {
          text: "Volver al Home",
          style: "default",
          onPress: () => changeScreens("home"),
        },
        { text: "Continuar", style: "default" },
      ]);
    } else {
      let negativeMatter = matter * -1;
      console.log(negativeMatter);
      if (typeMatter === "remove") {
        setMatter(negativeMatter);
      }

      const key = value.key;
      addMovements({ key, description, matter, date });
      changeScreens("home");
    }
  };

  let colorBalance = "black";
  if (balance < 0) colorBalance = "red";

  return (
    <View>
      <Header title={"Movimientos"} />
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Cuenta *{numberAccount}</Text>
        <Text style={{ fontSize: 20 }}>
          Saldo: <Text style={{ color: colorBalance }}>{balance}€</Text>
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Input
          styleContainer={{ width: "90%" }}
          iconName="book"
          placeholder="Descripción del movimiento"
          value={description}
          InputHandler={descriptionInputHandler}
        />
        <Input
          styleContainer={{ width: "90%" }}
          placeholder="Importe"
          iconName="cash"
          keyboardType="numeric"
          value={matter}
          InputHandler={matterInputHandler}
        />

        <InputDate
          styleContainer={{ width: "90%" }}
          value={date}
          InputHandler={dateInputHandler}
        />
      </View>

      <View style={styles.buttonsAccions}>
        <TouchableOpacity onPress={() => newMovement("add")}>
          <Ionicons
            name="add-circle-sharp"
            size={100}
            color={Colors.secundary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => newMovement("remove")}>
          <Ionicons
            name="remove-circle-sharp"
            size={100}
            color={Colors.secundary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "10%",
  },

  buttonsAccions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingTop: "10%",
  },

  datePickerStyle: {
    width: "90%",
  },
});

export default AddMovementsScreen;
