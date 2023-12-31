import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { AppLoading } from "expo";
import * as SplashScreen from 'expo-splash-screen'
import navigationTheme from "./app/assets/components/navigation/navigationTheme";
import AppNavigator from "./app/assets/components/navigation/AppNavigator";
import OfflineNotice from "./app/assets/components/OfflineNotice";
import AuthNavigator from "./app/assets/components/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/assets/components/navigation/rootNavigation";
import { View } from "react-native";
import { Text } from "react-native";

/*

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
*/

export default function App() {
  /*  
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
      ></AppLoading>
    );
  */
    

  //===============================================  
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadApp() {
      try {
        // Load your assets and perform any necessary initialization here

        // Simulate some loading time for demonstration
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Restore the user
        const user = await authStorage.getUser();
        if (user) setUser(user);
      } finally {
        // When everything is ready, hide the splash screen
        SplashScreen.hideAsync();
        setIsReady(true);
      }
    }

    // Show the splash screen and start loading
    SplashScreen.preventAutoHideAsync(); // Prevent automatic hiding
    loadApp();
  }, []);

  if (!isReady) {
    return null; // Return nothing while the app is loading
  }



  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <OfflineNotice />
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  </AuthContext.Provider>
  );
}
