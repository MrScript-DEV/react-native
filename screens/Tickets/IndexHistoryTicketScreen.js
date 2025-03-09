import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PageLayout from "../../components/PageLayout";
import TicketCard from "../../components/TicketCard";

const IndexHistoryTicketScreen = ({ navigation }) => {
  const closedTickets = [
    {
      id: "5",
      subject: "Problème de connexion",
      priority: "High",
      status: "Fermé",
      unreadMessages: 2,
    },
    {
      id: "6",
      subject: "Erreur lors du paiement",
      priority: "Medium",
      status: "Fermé",
      unreadMessages: 0,
    },
    {
      id: "7",
      subject: "Bogue dans l'application",
      priority: "Low",
      status: "Fermé",
      unreadMessages: 0,
    },
  ];

  const [selectedPriority, setSelectedPriority] = useState("All");

  const filterTickets = () => {
    if (selectedPriority === "All") {
      return closedTickets;
    }
    return closedTickets.filter(
      (ticket) => ticket.priority === selectedPriority
    );
  };

  const handleTicketPress = (ticketId) => {
    navigation.navigate("ShowTicket", {
      ticketId: ticketId,
      tickets: closedTickets,
      showBtnMessage: false,
    });
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.instructionText}>
          Retrouvez ici tous vos tickets qui ont été fermés.
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
});

export default IndexHistoryTicketScreen;
