import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen, MyPostsScreen, PublishScreen } from "../../screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PublishTabButton from "./PublishTabButton";
import route from "./route";
import useNotifications from "../../hooks/useNotifications";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
          
        },
      })}
    >
      <Tab.Screen
        name={route.HOME}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={route.PUBLISH}
        component={PublishScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <PublishTabButton
              onPress={() => navigation.navigate(route.PUBLISH)}
              
            />
          ),
          headerShown: false,
          //tabBarIcon:({color,size})=><MaterialCommunityIcons name="plus-circle" color={color} size={size}/>,
        })}
      />
      <Tab.Screen
        name={route.ACCOUNT}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
