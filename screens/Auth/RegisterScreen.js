import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Erreur", "Adresse email invalide.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 8) {
      Alert.alert(
        "Erreur",
        "Le mot de passe doit contenir au moins 8 caractères."
      );
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>
      <Text style={styles.subtitle}>Rejoignez Script Support</Text>

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
          placeholder="Mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmer le mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButtonLink}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
        >
          <Text style={styles.loginText}>
            Déjà un compte ?{" "}
            <Text style={styles.boldLoginText}>Se connecter</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
  registerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  loginButtonLink: {
    paddingVertical: 10,
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#555",
  },
  boldLoginText: {
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default RegisterScreen;
