import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

export default function AppSubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      style={[style, styles.button]}
      title={title}
      onPress={handleSubmit}
      bgColor="primaryD1"
      textColor={colors.black}
    ></AppButton>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    
   
  },
});
