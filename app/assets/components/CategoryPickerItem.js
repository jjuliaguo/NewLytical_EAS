import { StyleSheet, Text, View,  TouchableOpacity} from 'react-native'
import React from 'react'
import AppText from './AppText'
import AppIcon from './AppIcon'


export default function CategoryPickerItem({item,onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <AppIcon style={styles.icon} backgroundColor={item.backgroundColor} name={item.icon} size={100}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    //paddingHorizontal:10,
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  icon:{
    marginTop:5
  },
  label:{
     marginTop:5,
     marginBottom:15,
     textAlign:"center"
  }
})