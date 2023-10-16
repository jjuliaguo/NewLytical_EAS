import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppImageInputMuti from "../AppImageInputMuti";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

export default function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUri, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUri.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <AppImageInputMuti
        imageUris={imageUri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
