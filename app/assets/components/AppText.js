import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultStyles from '../config/styles'
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
//import Constants from "expo-constants"
//console.log(Constants)
export default function AppText({children, style, ...otherProps}) {
  return (
      <Text style={[defaultStyles.text,style]}{...otherProps}>{children}</Text>
  )
}