import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://scriptsupport.mrscript.ch/api";

export const apiFetch = async (
  endpoint,
  method = "GET",
  data = null,
  requiresAuth = false
) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (requiresAuth) {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  let json;

  try {
    json = await response.json();
  } catch (e) {
    throw new Error("Erreur serveur inattendue.");
  }

  if (!response.ok) {
    const message =
      json.message || "Une erreur est survenue. Veuillez réessayer.";
    throw new Error(message);
  }

  return json;
};
