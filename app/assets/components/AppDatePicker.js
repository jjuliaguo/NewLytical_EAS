import { StyleSheet, Text, View, Button, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function AppDatePicker(...otherProps) {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <View style={styles.container}>
        <AppText>
          {date.toLocaleString()}
        </AppText>
      </View>
      <View style={styles.pickersContainer}>
        <DateTimePicker
          style={styles.pickerButton}
          value={date}
          mode="date"
          is24Hour={true}
          onChange={(event, selectedDate)=>setDate(selectedDate)}
        />
        <DateTimePicker
          style={styles.pickerButton}
          value={date}
          mode="time"
          is24Hour={true}
          onChange={(event, selectedDate)=>setDate(selectedDate)}
        />
        <Button
          style={styles.resetButton}
          title="Current Time"
          onPress={(event, selectedDate)=>setDate(new Date())}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  dateText: {
    fontSize: 18,
    width: "100%",
  },
  pickersContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  pickerButton: {
    //padding: 15,
  },
  resetButton: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
});
