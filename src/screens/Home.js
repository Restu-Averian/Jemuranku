import React from "react";
import { View, Text, Button } from "react-native";
import ListClothesline from "../components/Home/ListClothesline";
import styles from "../styles";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function Home({ navigation }) {
  const listClothesline = [
    {
      id: uuidv4(),
      name: "Baju",
      count: 0,
    },
    {
      id: uuidv4(),
      name: "Celana",
      count: 0,
    },
    {
      id: uuidv4(),
      name: "Hoodie",
      count: 0,
    },
    {
      id: uuidv4(),
      name: "Jeans",
      count: 0,
    },
  ];
  const addClotheslineHandler = () => {
    navigation.navigate("AddClothesline");
  };

  const addCountClothesline = (index) => {
    console.log("data ke : ", index);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title_page}>List Jemuranku</Text>
      <ListClothesline
        data={listClothesline}
        addCountClothesline={addCountClothesline}
      />
      <Button title="Add Jemuran" onPress={addClotheslineHandler} />
    </View>
  );
}

export default Home;
