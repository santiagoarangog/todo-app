import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const iphoneHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fontColor: {
    color: "#00f2a9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: iphoneHeight > 800 ? 70 : 50,
    marginTop: 100,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#00f2a9",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 12,
    marginTop: 100,
    position: "absolute",
    bottom: iphoneHeight > 800 ? 90 : 30,
  },
});
