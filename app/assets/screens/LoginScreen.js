import { StyleSheet, Text, View, Image } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import {AppErrorMessage, AppForm, AppFormField, AppSubmitButton} from "../components/forms";
import authApi from "../../api/auth";

import useAuth from "../../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});
export default function LoginScreen(props) {
  const auth = useAuth()
  const[loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({email,password}) => {
    const result = await authApi.login(email,password);
   if (!result.ok) return setLoginFailed(true);
   setLoginFailed(false);
   
   auth.logIn(result.data);
  }
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../icon.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage error="Invaild email and/or password" visible={loginFailed}/>
        <AppFormField
          placeholder="User Name (Email)"
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
        <AppSubmitButton title="Login" />
      </AppForm>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"white"
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },

});
