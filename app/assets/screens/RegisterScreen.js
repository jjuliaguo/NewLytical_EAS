import { StyleSheet, View } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components/forms";
import usersApi from "../../api/user";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3, "Too Short! At Least 3 characters!")
    .max(50, "Too Long! At Most 50 characters")
    .label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});
export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    console.log("here")
    auth.logIn(authToken);
  };

  return (
    <>
      <AppActivityIndicator
        visible={registerApi.loading || loginApi.loading}
      />
      <AppSafeAreaView style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppErrorMessage error={error} visible={error} />
          <AppFormField
            placeholder="Name"
            autoCorrect={false}
            icon="account"
            name="name"
          />
          <AppFormField
            placeholder="User Name"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            icon="email"
            name="email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            placeholder="Password"
            icon="key"
            name="password"
          />
          <AppSubmitButton title="Register" />
        </AppForm>
      </AppSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
});
