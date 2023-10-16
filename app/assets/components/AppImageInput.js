import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import AppSafeAreaView from "./AppSafeAreaView";
import colors from "../config/colors";
export default function AppImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    //requestPermission(); //unconmment later
  }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync;
    //retrun fn
    if (!granted) alert("Please allow app to use your camera roll.");
  };


  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you wanna delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text:"No"},
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error !! Something goes wrong", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
   
  },
  image: {
    width: "100%",
    height: "100%",
  
  },
});
