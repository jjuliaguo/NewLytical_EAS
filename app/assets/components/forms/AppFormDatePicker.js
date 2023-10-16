import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppDatePicker from "../AppDatePicker";
import { useFormikContext } from "formik";
export default function AppFormDatePicker(name, time,...otherProps) {
  const {setFieldValue,values} = useFormikContext();
  return (
  <AppDatePicker 
  
    
  />);
}

const styles = StyleSheet.create({});
