

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppLoading from 'expo-app-loading';
import {
  AccountScreen,

  NewsDetailScreen,

} from "./app/assets/screens";

import navigationTheme from "./app/assets/components/navigation/navigationTheme";
import AppNavigator from "./app/assets/components/navigation/AppNavigator";
import OfflineNotice from "./app/assets/components/OfflineNotice";
import AuthNavigator from "./app/assets/components/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import  {navigationRef} from "./app/assets/components/navigation/rootNavigation"
import logger from "./app/utility/logger";
import AppSafeAreaView from "./app/assets/components/AppSafeAreaView";
import AppText from "./app/assets/components/AppText";
logger.start()

function Feed() {
  return <NewsDetailScreen />;
}

function Profile() {
  return <AccountScreen />;
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaions"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppSafeAreaView>
      <AppText>hello</AppText>
    </AppSafeAreaView>
  )
  /*
  const[user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async() => {
    const user = await authStorage.getUser();
    if (user) setUser(user);

  }

 if (!isReady)
  return <AppLoading startAsync={restoreUser} onFinish={()=>setIsReady(true)} onError={()=>console.log("splash screen error")}></AppLoading>
  
  return (
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <AppNavigator/> : <AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
  */
}
