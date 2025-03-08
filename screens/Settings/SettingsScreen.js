import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PageLayout from "../../components/PageLayout";
import CustomButton from "../../components/CustomButton";

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
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
            buttonText="Modifier le profil"
            onPress={() => alert("Modifier profil (Factice)")}
            style={styles.settingButton}
          />
          <CustomButton
            buttonText="Notifications"
            onPress={() => alert("Notifications (Factice)")}
            style={styles.settingButton}
          />
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Application</Text>
          <CustomButton
            buttonText="Aide"
            onPress={() => alert("Aide (Factice)")}
            style={styles.settingButton}
          />
          <CustomButton
            buttonText="À propos"
            onPress={() => alert("À propos (Factice)")}
            style={styles.settingButton}
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
  settingButton: {
    marginBottom: 10,
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
