import { FlatList, Text, View, StyleSheet } from "react-native";
import Movement from "./Movement";

const MovementList = ({ list, dropMoviment }) => {
  return (
    <View>
      {list && list.length ? (
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <Movement item={itemData.item} dropMoviment={dropMoviment} />
            );
          }}
        />
      ) : (
        <View>
          <Text>Lista Vacia</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovementList;
