import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import PageLayout from "../../components/PageLayout";
import { login } from "../../services/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Erreur", "Adresse email invalide.");
      return;
    }

    try {
      const result = await login(email, password);
      const roles = result.data.user.roles;

      if (roles.includes("Admin") || roles.includes("Support")) {
        Alert.alert(
          "Accès refusé",
          "Cette application est réservée aux utilisateurs.\nLes administrateurs et le support doivent utiliser l'application de gestion."
        );
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    } catch (err) {
      Alert.alert("Échec de connexion", err.message);
    }
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue</Text>
        <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Votre email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.signupText}>
              Nouveau sur Script Support ?{" "}
              <Text style={styles.boldSignupText}>S'inscrire</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "left",
    marginBottom: 30,
  },
  formContainer: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "white",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  signupButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
    color: "#555",
  },
  boldSignupText: {
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default LoginScreen;
