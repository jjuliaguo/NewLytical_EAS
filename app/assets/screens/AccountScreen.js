import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import AppIcon from "../components/AppIcon";
import {AppListItem,AppListItemSeparator} from "../components/lists";
import colors from "../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import useAuth from "../../auth/useAuth";


const menuItems = [
  // {
  //   title: "My Posts",
  //   icon: {
  //     name: "typewriter",
  //     backgroundColor: "#FF7F50",
  //   },
  // },
  // {
  //   title: "My Message",
  //   icon: {
  //     name: "email",
  //     backgroundColor: colors.primaryGreen,
  //   },
  //   targetScreen:"Message"
  // },
];

export default function AccountScreen({navigation}) {
  const {user, logOut} = useAuth();

  return (
    <AppSafeAreaView style={styles.screen}>
      <View style={styles.containers}>
        <AppListItem
          title={user.name}
          subTitle={user.email}
          image={require("../profile.png")}
        />
      </View>
      <View style={styles.containers}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={AppListItemSeparator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              onPress={()=>navigation.navigate(item.targetScreen)}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <AppListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        onPress={()=>logOut()}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryL2,
    flex: 1,
  },
  containers: {
    marginVertical: 20,
  },
});
