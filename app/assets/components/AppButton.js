import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppButton({
  title,
  onPress,
  bgColor = "primary",
  textColor = "black",
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.button, style, { backgroundColor: colors[bgColor] }]}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom:20
  },
  text: {
    //color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
