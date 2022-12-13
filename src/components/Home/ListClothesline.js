import React from "react";
import { FlatList, Pressable, Text } from "react-native";
function ListClothesline({ data, addCountClothesline }) {
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
            onPress={() => addCountClothesline(item?.id)}
          >
            <Text>{item?.name}</Text>
            <Text>{item?.count}</Text>
          </Pressable>
        );
      }}
    />
  );
}

export default ListClothesline;
