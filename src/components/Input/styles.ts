import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    paddingBottom: 20,
    textAlign: "center",
  },
  slider: {
    width: "80%",
  },
  sliderContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  badgeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  sliderWrapper: { flex: 1, alignItems: "center" },
});
