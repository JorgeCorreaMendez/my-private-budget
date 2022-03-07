import { FlatList, Text, View } from "react-native";
import Movement from "./Moviment";

const MovementList = ({ list, dropMoviment, editMoviment }) => {
  return (
    <View style={{flex: 1}}>
      {list && list.length ? (
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <Movement
                item={itemData.item}
                dropMoviment={dropMoviment}
                editMoviment={editMoviment}
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
