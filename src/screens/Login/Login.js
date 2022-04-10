import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LoginStyles from "./Login.styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { getUsers } from "../../services/asyncStorage";
import { findIndex } from "lodash";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUsername } from "../../redux/actions/authActions";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is requred"),
  password: yup.string().required("Password is required"),
});

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      let currentUsers = await getUsers();

      const index = findIndex(currentUsers, (o) => {
        return o.username === values.username && o.password === values.password;
      });

      if (index >= 0) {
        dispatch(setUsername({ username: values.username }));
        dispatch(setLoggedIn());
      } else {
        Toast.show({
          text1: "Login Failed",
          text2: "Incorrect username / password",
          type: "error",
        });
      }
    },
  });

  const handleRegisterPress = () => {
    navigation.navigate("REGISTER");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={LoginStyles.container}
    >
      <Text style={LoginStyles.textLogin}>Login</Text>
      <View style={LoginStyles.credentialSection}>
        <View style={LoginStyles.field}>
          <Text style={LoginStyles.textLabels}>{`Username `}</Text>
          <TextInput
            style={LoginStyles.textInput}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange("username")}
          />
          {formik.errors.username && (
            <Text style={LoginStyles.textLabels}>{formik.errors.username}</Text>
          )}
        </View>
        <View style={LoginStyles.field}>
          <Text style={LoginStyles.textLabels}>{`Password `}</Text>
          <TextInput
            style={LoginStyles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
          />
          {formik.errors.password && (
            <Text style={LoginStyles.textLabels}>{formik.errors.password}</Text>
          )}
        </View>
        <View style={LoginStyles.register}>
          <Text style={LoginStyles.textLabels}>{`or`}</Text>
          <Text
            style={LoginStyles.textLogin}
            onPress={handleRegisterPress}
          >{`Register`}</Text>
        </View>
        <TouchableOpacity onPress={formik.submitForm}>
          <View style={LoginStyles.submit}>
            <Text style={LoginStyles.textSubmit}>{`Submit`}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={formik.resetForm}>
          <View style={LoginStyles.reset}>
            <Text style={LoginStyles.textSubmit}>{`Clear Form`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
