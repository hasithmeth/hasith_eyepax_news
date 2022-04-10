import AsyncStorage from "@react-native-async-storage/async-storage";
import appSettings from "../config";

const getUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(appSettings.asyncKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Toast.show({
      text1: "Error",
      text2: "Failed to read local user data",
      type: "error",
    });
  }
};

const setUsers = async (value) => {
  console.log(value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(appSettings.asyncKey, jsonValue);
  } catch (e) {
    Toast.show({
      text1: "Error",
      text2: "Failed to save local user data",
      type: "error",
    });
  }
};

export { getUsers, setUsers };
