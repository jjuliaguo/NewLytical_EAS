import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AppText from './AppText'

export default function AppPickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text:{
    padding:20
  }
})