import { Alert, StyleSheet } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React, {useState } from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import listingsApi from "../../api/listings";
import UploadScreen from "./UploadScreen";
import colors from "../config/colors";

//https://icons.expo.fyi/
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(3, "Too Short! At Least 3 characters!")
    .max(50, "Too Long! At Most 50 characters")
    .label("Title"),
  publishedDate: Yup.date().required(),
  category: Yup.object().required().label("Category"),
  article: Yup.string()
    .required()
    .min(1, "Too Short! At Least 1 character!")
    .max(1000, "Too Long! At Most 1000 characters")
    .label("Article"),
  images: Yup.array().min(1, "Please select at lease one images."), //At leaset one image -> min(1)
});
const categories = [
  {
    label: "Politics",
    value: 1,
    backgroundColor: "#E1DAC6",
    icon: "scale-balance",
  },
  {
    label: "Education",
    value: 2,
    backgroundColor: "#E1DAC6",
    icon: "book-open-page-variant",
  },
  { label: "Sports", value: 3, backgroundColor: "#E1DAC6", icon: "basketball" },
  { label: "Environment", value: 4, backgroundColor: "#E1DAC6", icon: "earth" },
  {
    label: "Entertainment",
    value: 5,
    backgroundColor: "#E1DAC6",
    icon: "google-controller",
  },
  {
    label: "Technology",
    value: 6,
    backgroundColor: "#E1DAC6",
    icon: "monitor-cellphone",
  },
  {
    label: "Activities & Travel",
    value: 7,
    backgroundColor: "#E1DAC6",
    icon: "airplane-takeoff",
  },
  {
    label: "Art & Culture",
    value: 8,
    backgroundColor: "#E1DAC6",
    icon: "palette",
  },
  {
    label: "General News & Affairs",
    value: 9,
    backgroundColor: "#E1DAC6",
    icon: "newspaper-variant",
  },
];

export default function PublishScreen() {
  const [uploadScreenVisible, setUploadScreenVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadScreenVisible(true);
    //listing.publishedDate = new Date().toISOString();
    const result = await listingsApi.addListings(
      { ...listing }, (progress) => {
      console.log("Progress:", progress);
      setProgress(progress);
    });

    if (!result.ok) {
      console.log(result)
      setUploadScreenVisible(false);
      return alert("Oops! Something went wrong, Please try again later");
    } else {
      //console.log(result)
      //alert("Upload Success");
      resetForm();
    }
  };
  return (
    <AppSafeAreaView style={styles.container}>
      <UploadScreen
        onDone={() => setUploadScreenVisible(false)}
        progress={progress}
        visible={uploadScreenVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          publishedDate: new Date(),
          category: null,
          article: "",
          images: [],
        }}
        // onSubmit={(values) => {

        //   values.publishedDate=new Date();
        //   console.log(values);
        // }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField placeholder="Title" autoCorrect={false} name="title" />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
          nOfCol={2}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormImagePicker name="images" />
        <AppFormField
          multiline
          numberOfLines={10}
          placeholder="Content"
          autoCorrect={false}
          name="article"
        />
        <AppSubmitButton title="Publish" />
      </AppForm>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primaryL2,
  },
});
