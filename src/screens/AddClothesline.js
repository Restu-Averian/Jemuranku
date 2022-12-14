import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import styles from "../styles";
import { v4 as uuidv4 } from "uuid";

function AddClothesline({ navigation, route }) {
  const [state, setState] = React.useState({
    clotheslineInput: "",
    count: 0,
  });
  const handleAddClothesline = async () => {
    const newDataClothesline = {
      id: uuidv4(),
      name: state.clotheslineInput,
      count: state.count,
    };

    try {
      const dataFromAsyncStorage = await AsyncStorage.getItem(
        "dataClothesline"
      );

      const dataFromState = route.params.listClothesline;

      const arrDatasClothesline = dataFromAsyncStorage
        ? [...JSON.parse(dataFromAsyncStorage), newDataClothesline]
        : [...dataFromState, newDataClothesline];

      await AsyncStorage.setItem(
        "dataClothesline",
        JSON.stringify(arrDatasClothesline)
      );

      navigation.navigate("Home", {
        dataClothesline: arrDatasClothesline,
      });
    } catch (e) {}
  };

  const handleOnChangeText = (val) => {
    setState((prevState) => ({ ...prevState, clotheslineInput: val }));
  };
  const handleOnChangeCount = (val) => {
    setState((prevState) => ({ ...prevState, count: val }));
  };

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text style={styles.title_page}>Add Clothesline</Text>
      <TextInput
        value={state.clotheslineInput}
        onChangeText={(val) => handleOnChangeText(val)}
        style={stylesText.textInput}
      />
      <TextInput
        value={state.count}
        onChangeText={(val) => handleOnChangeCount(val)}
        style={stylesText.textInput}
      />
      <Button title="Tambah Jemuran" onPress={handleAddClothesline} />
    </View>
  );
}

const stylesText = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingVertical: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default AddClothesline;
