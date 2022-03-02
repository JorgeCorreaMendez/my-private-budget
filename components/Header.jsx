import { View, Text, StyleSheet } from "react-native";
import Colors from '../constants/color'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
    paddingBottom: "5%",
  },

  titleHeader: {
    color: "white",
    fontSize: 20,
  },
});

export default Header;
