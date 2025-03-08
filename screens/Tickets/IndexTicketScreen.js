// IndexTicketScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PageLayout from "../../components/PageLayout";
import TicketCard from "../../components/TicketCard";

const IndexTicketScreen = ({ navigation }) => {
  const tickets = [
    {
      id: "1",
      subject: "Problème de connexion",
      priority: "High",
      status: "Ouvert",
      unreadMessages: 3,
    },
    {
      id: "2",
      subject: "Erreur lors du paiement",
      priority: "Medium",
      status: "Ouvert",
      unreadMessages: 1,
    },
    {
      id: "3",
      subject: "Bogue dans l'application",
      priority: "Low",
      status: "En attente",
      unreadMessages: 0,
    },
    {
      id: "4",
      subject: "Problème de mise à jour",
      priority: "High",
      status: "Ouvert",
      unreadMessages: 2,
    },
  ];

  const [selectedPriority, setSelectedPriority] = useState("All");

  const filterTickets = () => {
    if (selectedPriority === "All") {
      return tickets;
    }
    return tickets.filter((ticket) => ticket.priority === selectedPriority);
  };

  const handleTicketPress = (ticketId) => {
    navigation.navigate("ShowTicket", { ticketId: ticketId, tickets: tickets });
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.instructionText}>
          Retrouvez ici tous vos tickets qui sont actuellement en cours.
        </Text>
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Filtrer par priorité:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedPriority}
              style={styles.picker}
              dropdownIconColor={"#333"}
              onValueChange={(itemValue) => setSelectedPriority(itemValue)}
            >
              <Picker.Item label="Tout" value="All" />
              <Picker.Item label="Faible" value="Low" />
              <Picker.Item label="Moyenne" value="Medium" />
              <Picker.Item label="Élevée" value="High" />
            </Picker>
          </View>
        </View>

        {filterTickets().map((item) => (
          <TicketCard key={item.id} ticket={item} onPress={handleTicketPress} />
        ))}
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
    marginBottom: 20,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  pickerContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  ticketsListContainer: {
    flex: 1,
    width: "100%",
  },
});

export default IndexTicketScreen;
