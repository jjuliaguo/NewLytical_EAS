import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Image} from 'react-native-expo-image-cache'
export default function AppCard({title,subtitle,imageUrl, onPress, thumbnailUrl}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
        <Image style={styles.cardImg} tint="light" preview={{uri:thumbnailUrl}} uri={imageUrl}/>
        <AppText style = {styles.cardTitle}>{title}</AppText>
        <AppText style = {styles.cardPreviewDescription}>{subtitle} </AppText>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

    card:{
        backgroundColor:colors.white,
        borderRadius:15,
        margin:20,
        overflow:'hidden',
    
    },
    cardImg:{
        width:"100%",  
        height:150,    
    },
    cardTitle : {
        fontSize:20,
        fontWeight:"600",
        marginBottom:7,
        color:colors.secondaryD2,
        marginHorizontal:5,
        marginTop:10,
    

    },
    cardPreviewDescription: {
        fontSize:18,
        fontWeight:"400",
        margin:10,
        color:colors.black,
    
       
    },


})