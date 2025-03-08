// IndexTicketScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
    navigation.navigate("ShowTicket", { ticketId });
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text>Vous retrouvez les tickets qui sont actuellement en cours</Text>

        <Text style={styles.filterLabel}>Filtrer par priorité</Text>
        <Picker
          selectedValue={selectedPriority}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedPriority(itemValue)}
        >
          <Picker.Item label="Tout" value="All" />
          <Picker.Item label="Faible" value="Low" />
          <Picker.Item label="Moyenne" value="Medium" />
          <Picker.Item label="Élevée" value="High" />
        </Picker>

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
    paddingHorizontal: 0,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default IndexTicketScreen;
