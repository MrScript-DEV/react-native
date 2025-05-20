import { apiFetch } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (email, password) => {
  const result = await apiFetch("/login", "POST", { email, password });
  await AsyncStorage.setItem("token", result.data.token);
  return result;
};

export const logout = async () => {
  try {
    await apiFetch("/logout", "POST", null, true);
  } catch (err) {
    Alert.alert("Erreur", err.message || "Erreur lors de la déconnexion.");
  } finally {
    await AsyncStorage.removeItem("token");
  }
};

export const register = async (
  first_name,
  last_name,
  email,
  password,
  password_confirmation
) => {
  const result = await apiFetch("/register", "POST", {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
  });

  return result;
};
