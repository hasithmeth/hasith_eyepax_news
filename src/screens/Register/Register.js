import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RegisterStyles from "./Register.styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { getUsers, setUsers } from "../../services/asyncStorage";
import { useDispatch } from "react-redux";
import { setUsername, setLoggedIn } from "../../redux/actions/authActions";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is requred"),
  password: yup.string().required("Password is required"),
});

export default function Register({ navigation }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      let currentUsers = await getUsers();
      const newUser = {
        username: values.username,
        password: values.password,
      };

      if (!currentUsers) {
        currentUsers = [];
        currentUsers.push(newUser);
      } else {
        currentUsers.push(newUser);
      }

      await setUsers(currentUsers);

      dispatch(setUsername({ username: newUser.username }));
      dispatch(setLoggedIn());
    },
  });

  const handleLoginPress = () => {
    navigation.navigate("LOGIN");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={RegisterStyles.container}
    >
      <Text style={RegisterStyles.textLogin}>Register</Text>
      <View style={RegisterStyles.credentialSection}>
        <View style={RegisterStyles.field}>
          <Text style={RegisterStyles.textLabels}>{`Username `}</Text>
          <TextInput
            style={RegisterStyles.textInput}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange("username")}
          />
          {formik.errors.username && (
            <Text style={RegisterStyles.textLabels}>
              {formik.errors.username}
            </Text>
          )}
        </View>
        <View style={RegisterStyles.field}>
          <Text style={RegisterStyles.textLabels}>{`Password `}</Text>
          <TextInput
            style={RegisterStyles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
          />
          {formik.errors.password && (
            <Text style={RegisterStyles.textLabels}>
              {formik.errors.password}
            </Text>
          )}
        </View>
        <View style={RegisterStyles.register}>
          <Text style={RegisterStyles.textLabels}>{`or`}</Text>
          <Text
            style={RegisterStyles.textLogin}
            onPress={handleLoginPress}
          >{`Login`}</Text>
        </View>
        <TouchableOpacity onPress={formik.submitForm}>
          <View style={RegisterStyles.submit}>
            <Text style={RegisterStyles.textSubmit}>{`Submit`}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={formik.resetForm}>
          <View style={RegisterStyles.reset}>
            <Text style={RegisterStyles.textSubmit}>{`Clear Form`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
