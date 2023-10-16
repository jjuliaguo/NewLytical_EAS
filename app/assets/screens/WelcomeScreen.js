import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import React from "react";
import colors from "../config/colors";

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground source={require("./workplace.jpg")} blurRadius={2} style={styles.background}>
      <View style={styles.iconContainer}>
        <Image source={require("../icon-removebg.png")} style={styles.icon}></Image>
      </View>
          <Text style={styles.tagLine1}>Know What</Text>
          <Text style={styles.tagLine2}>Happens Today</Text>
   
       
     
      <View style={styles.buttonContainer}>
        <AppButton title="login" bgColor="primary" onPress={()=>navigation.navigate("Login")} />
        <AppButton title="Register" bgColor="primaryD3" textColor="white" onPress={()=>navigation.navigate("Register")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    
  },

  iconContainer:{
    position:"absolute",
    top:20, 
    //backgroundColor:"blue",
    alignSelf:"center"
  },
  icon: {
    width:150,
    height:150,
  },

  tagLine1:{ 
    position:"absolute",
    top:170, 
    fontSize:24,
    fontWeight: "600",
    paddingVertical:5,
    color:colors.black,
    //backgroundColor:"red",
    paddingLeft:40,
    alignSelf:"flex-start"
  },
  tagLine2:{
    position:"absolute",
    top:200, 
    fontSize:22,
    fontWeight: "600",
    color:colors.black,
    alignSelf:"flex-end",
    paddingRight:15
  },
  buttonContainer: {
    /*flex:1,
    backgroundColor:"green",*/
    padding:20,
    width:"100%",
    justifyContent: "flex-end",
  }
});
