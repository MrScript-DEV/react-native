import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import PageLayout from "../../components/PageLayout";

const CreateTicketScreen = ({ navigation }) => {
  let subject = "";
  let message = "";
  let priority = "Low";

  const handleSubmit = () => {
    if (!subject || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }

    Alert.alert("Ticket soumis", "Votre ticket a bien été créé.");
    navigation.goBack();
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text>Soyez précis lorsque vous décrivez votre problème</Text>

        <Text style={styles.label}>Utilisateur</Text>
        <TextInput style={styles.input} value={"John Doe"} editable={false} />

        <Text style={styles.label}>Sujet du ticket</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le sujet du ticket"
          onChangeText={(text) => (subject = text)}
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Décrivez votre problème"
          onChangeText={(text) => (message = text)}
          multiline
        />

        <Text style={styles.label}>Priorité</Text>
        <Picker
          selectedValue={priority}
          style={styles.picker}
          onValueChange={(itemValue) => (priority = itemValue)}
        >
          <Picker.Item label="Faible" value="Low" />
          <Picker.Item label="Moyenne" value="Medium" />
          <Picker.Item label="Élevée" value="High" />
        </Picker>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Soumettre le ticket</Text>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CreateTicketScreen;
