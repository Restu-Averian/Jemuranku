import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

function AddClothesline({ navigation }) {
  const handleAddClothesline = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title_page}>Add Clothesline</Text>
      <Button title="Tambah Jemuran" onPress={handleAddClothesline} />
    </View>
  );
}

export default AddClothesline;
