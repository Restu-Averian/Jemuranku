import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  title_page: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default styles;
