import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
export default function AppListItemSeparator({ style }) {
  return (
    <View
      style={[
        { height: 1, width: "100%", backgroundColor: colors.light },
        style,
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({});
