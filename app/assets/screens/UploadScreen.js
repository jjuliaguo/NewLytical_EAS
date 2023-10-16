import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import * as Svg from "react-native-svg";
import LottieView from "lottie-react-native";

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView 
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            source={require("../animations/done.json")}
            style={styles.doneAnimation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  doneAnimation:{
    width:150,
  }
});
