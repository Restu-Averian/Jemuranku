import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
function ListClothesline({ data, handleChangeDataPerItem }) {
  return (
    <FlatList
      style={{ margin: "auto" }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      data={data}
      keyExtractor={(item) => item?.id}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <View>
            <Pressable
              style={{
                paddingVertical: 20,
                paddingHorizontal: 15,
                backgroundColor: "grey",
                marginHorizontal: 30,
                marginVertical: 20,
                alignItems: "center",
              }}
              key={item?.id}
              onPress={() => handleChangeDataPerItem(item?.id, "addCount")}
            >
              <Text>{item?.name}</Text>
              <Text>{item?.count}</Text>
            </Pressable>
            <TouchableOpacity
              style={{
                borderColor: "grey",
                borderWidth: 1,
                alignItems: "center",
                paddingVertical: 5,
              }}
              onPress={() => handleChangeDataPerItem(item?.id, "resetCount")}
            >
              <Text>Reset Count</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

export default ListClothesline;
