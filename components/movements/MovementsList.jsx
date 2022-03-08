import { FlatList, Text, View } from "react-native";
import Movement from "./Movement";

const MovementList = ({ list, dropMovement, editMovement }) => {
  return (
    <View style={{ flex: 1 }}>
      {list && list.length ? (
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <Movement
                item={itemData.item}
                dropMovement={dropMovement}
                editMovement={editMovement}
              />
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

export default MovementList;
