import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import PageLayout from "../../components/PageLayout";
import CustomButton from "../../components/CustomButton";
import { logout } from "../../services/auth";

const SettingsScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (err) {
      Alert.alert("Erreur", err.message || "Déconnexion impossible.");
    }
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.userName}>John Doe</Text>
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Compte</Text>
          <CustomButton
            iconSource={require("../../assets/icons/edit_profile_icon.png")}
            buttonText="Modifier le profil"
            onPress={() => navigation.navigate("EditProfile")}
          />
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Application</Text>
          <CustomButton
            iconSource={require("../../assets/icons/help_icon.png")}
            buttonText="Aide"
            onPress={() => navigation.navigate("Help")}
          />
          <CustomButton
            iconSource={require("../../assets/icons/about_icon.png")}
            buttonText="À propos"
            onPress={() => navigation.navigate("About")}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  headerSection: {
    marginBottom: 30,
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  settingsGroup: {
    marginBottom: 30,
  },
  groupTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
    color: "#555",
    textAlign: "left",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
