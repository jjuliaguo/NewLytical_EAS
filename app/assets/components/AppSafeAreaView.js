import { StyleSheet, SafeAreaView,View,Platform, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function AppSafeAreaView({children, style }) {
  return (
    <SafeAreaView style={[styles.screen,style]}>
      <View style={[styles.view,style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        //paddingTop:Platform.OS ==="android" ? StatusBar.currentHeight:0
        paddingTop:Constants.statusBarHeight,
        flex:1, 
    },
    view:{
      flex:1,
    } 
})