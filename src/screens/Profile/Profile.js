import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ProfileStyles from "./Profile.styles";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedOut } from "../../redux/actions/authActions";

export default function Profile() {
  const dispatch = useDispatch();

  const { isLoggedIn, userName } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(setLoggedOut());
  };

  return (
    <View style={ProfileStyles.container}>
      <Text style={ProfileStyles.textLabels}>{`Hello there, ${userName}`}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={ProfileStyles.submit}>
          <Text style={ProfileStyles.textSubmit}>{`Logout`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
