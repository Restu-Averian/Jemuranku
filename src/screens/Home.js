import React from "react";
import { View, Text, Button, RefreshControl } from "react-native";
import ListClothesline from "../components/Home/ListClothesline";
import styles from "../styles";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

function Home(props) {
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
  const [state, setState] = React.useState({
    listClothesline,
    isRefreshing: false,
  });
  const addClotheslineHandler = () => {
    props.navigation.navigate("AddClothesline", { listClothesline });
  };

  const handleChangeDataPerItem = async (id, action) => {
    const newListClothesline = state.listClothesline.map((item) => {
      if (item.id === id) {
        return {
          id: item?.id,
          name: item?.name,
          count: action === "addCount" ? (item.count += 1) : 0,
        };
      } else {
        return item;
      }
    });

    try {
      await AsyncStorage.setItem(
        "dataClothesline",
        JSON.stringify(newListClothesline)
      );
    } catch (e) {}

    setState((prevState) => ({
      ...prevState,
      listClothesline: newListClothesline,
    }));
  };

  const getDataFromAsyncStorage = async () => {
    try {
      const dataFromAsyncStorage = await AsyncStorage.getItem(
        "dataClothesline"
      );

      setState((prevState) => ({
        ...prevState,
        listClothesline: dataFromAsyncStorage
          ? JSON.parse(dataFromAsyncStorage)
          : listClothesline,
      }));
    } catch (e) {}
  };

  const clearClotheslineDatas = async () => {
    try {
      await AsyncStorage.removeItem("dataClothesline");
      getDataFromAsyncStorage();
    } catch (e) {}
  };

  useFocusEffect(
    React.useCallback(() => {
      let isLoad = true;
      console.log("ss");
      if (isMounted) {
        getDataFromAsyncStorage();
      }

      return () => (isLoad = false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <RefreshControl
        refreshing={state.isRefreshing}
        onRefresh={() => getDataFromAsyncStorage()}
        style={{ flex: 1, marginVertical: 50 }}
      >
        <Text style={styles.title_page}>List Jemuranku</Text>
        <ListClothesline
          data={state.listClothesline}
          handleChangeDataPerItem={handleChangeDataPerItem}
        />
      </RefreshControl>
      <Button title="Add Jemuran" onPress={addClotheslineHandler} />
      <Button title="Clear" onPress={clearClotheslineDatas} />
    </View>
  );
}

export default Home;
