//lisings Screen
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import route from "../components/navigation/route";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

import lisingsApi from "../../api/listings";
// const listings = [
//   {
//     id: 1,
//     title: "Last day due for submmit your tax file",
//     postContent: "Find out what's new for the 2022 tax season and your filing and payment due dates. Begin by gathering your documents to report income and claim deductions, and choose how you want to file and send your completed tax return to the CRA.\n\n\nUnderstand your rights as a taxpayer and who should file a tax return.",
//     image: require("../new1.png"),
//   },
//   {
//     id: 2,
//     title: "Vancouver crews quickly douse ‘spectacular’ fire at downtown restaurant",
//     postContent: "Vancouver firefighters were able to quickly extinguish a blaze in the city’s central business district that sent a massive cloud of smoke through the area Thursday evening. \n\n\nVancouver Fire and Rescue Services Deputy Chief of Operations Trevor Connelly said crews were called to a Japanese barbeque restaurant at 888 Nelson St. around 7 p.m., where a fire had broken out in the kitchen. \n\n\nThe fire got into the building’s air vents, he said, where it created a “spectacular” effect to onlookers because it was venting out of the roof.\n\n\nCrews put the fire down within about 45 minutes, and Connelly said there were no reports of injuries.",
//     image: require("../new2.png"),
//   },
//   {
//     id:3,
//     title: "This Vancouver Couple Lives Rent-free in an Ambulance",
//     postContent: "A couple from Vancouver has shared their unique solution for living rent-free in one of the world’s priciest cities for the past two and a half years. Raychel Reimer and Nick Hurley transformed an ambulance into a tiny home, which has gained over 1.2 million views on TikTok since they posted a video showcasing their setup. In 2019, they purchased the ambulance for $6,000 and spent an additional $6,000 to convert it into their living quarters. The video highlights the features of their cozy space, which includes a bed, a closet cleverly concealed in a bench, a kitchenette with a foot water pump, and a toilet. The couple has since taken their unique home on the road, driving through Canada, the United States, and Mexico.",
//     image: require("../new3.png"),
//   }
// ];
export default function MyPostsScreen({ navigation }) {
  //const {data: listings,error,loading, request: loadListings}= useApi(allPostsAPI.getListings);
  const getListingsApi = useApi(lisingsApi.getListings);
  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  //Get first 15 words from string javascript
  function getWordStr(str) {
    //return str // modify

    return str.split(/\s+/).slice(0, 15).join(" ") + "...";
  }
  return (
    <>
      <ActivityIndicator animating={getListingsApi.loading} size="large" />
      <AppSafeAreaView style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the result</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={getWordStr(item.article)}
              imageUrl={item.images[0].url}
              onPress={() => {
                navigation.navigate(route.NEWS_DETAILS, item);
              }}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
        <View style={{ height: 100 }}></View>
      </AppSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryL2,
  },
});
