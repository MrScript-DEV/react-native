import React, { useState, useEffect } from "react";
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
import { index } from "../../services/priority";
import { create } from "../../services/ticket";

const CreateTicketScreen = ({ navigation }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState(null);
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const loadPriorities = async () => {
      try {
        const response = await index();
        setPriorities(response.data);
        if (response.data.length > 0) {
          setPriority(response.data[0].id);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des priorités:", err.message);
      }
    };

    loadPriorities();
  }, []);

  const handleSubmit = async () => {
    if (!subject || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }

    try {
      await create(subject, priority, message);

      Alert.alert("Ticket soumis", "Votre ticket a bien été créé.", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (err) {
      Alert.alert("Une erreur est survenue..", err.message);
    }
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.instructionText}>
          Soyez précis lorsque vous décrivez votre problème
        </Text>

        <View style={styles.formContainer}>
          {/* <Text style={styles.label}>Utilisateur</Text>
          <TextInput
            style={styles.input}
            value={"John Doe"}
            editable={false}
            placeholderTextColor="#aaa"
          /> */}

          <Text style={styles.label}>Sujet du ticket</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le sujet du ticket"
            placeholderTextColor="#aaa"
            onChangeText={setSubject}
            value={subject}
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Décrivez votre problème"
            placeholderTextColor="#aaa"
            onChangeText={setMessage}
            value={message}
            multiline
            textAlignVertical="top"
          />

          <Text style={styles.label}>Priorité</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={priority}
              style={styles.picker}
              onValueChange={(itemValue) => setPriority(itemValue)}
            >
              {priorities.map((item) => (
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Soumettre le ticket</Text>
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
  },
  instructionText: {
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
  textArea: {
    minHeight: 100,
    paddingVertical: 15,
  },
  pickerContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CreateTicketScreen;
