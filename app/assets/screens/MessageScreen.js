import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import colors from "../config/colors";
import {AppListItem,AppListItemDeletable,AppListItemSeparator} from "../components/lists"

const initialMessages = [
  {
    id: 1,
    title: "Garry Chen",
    description: "How are Julia?",
    image: require("../p1.jpg"),
  },
  {
    id: 2,
    title: "John Doe",
    description:
      "Hey Julia, did you finished your Math Assighnment?? I hace asome question !",
    image: require("../profile.png"),
  },
  {
    id: 3,
    title: "Helen Wange",
    description:
      "Hey Julia, balbalblbalbbj jiajfjsaogjgoeagiajseoifh balblaigjasoif j l HEIHEHIAH dahdduhuhiau erkgp oafjdajfoisdjfovidjsafoinaaoinoai n jaogjsaoifndasoign aoingaoinga sng oifsbijgofdiJIRORINOIN ONRIONRI NON IGOF  JOIJ O JGFOI  HUFIAGHUDAS ",
    image: require("../p1.jpg"),
  },
];

export default function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from message
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    //console.log(newMessages[0]);
  };

  return (
    <AppSafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messge --", item)}
            renderRightActions={() => (
              <AppListItemDeletable onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <AppListItemSeparator style={{ backgroundColor: colors.light }} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../p1.jpg"),
            },
          ]);
        }}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({});
