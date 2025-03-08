import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PageLayout from "../../components/PageLayout";
import TicketCard from "../../components/TicketCard";
import CustomButton from "../../components/CustomButton";

const IndexEvaluateTicketScreen = ({ navigation }) => {
  const evaluateTickets = [
    {
      id: "8",
      subject: "Assistance pour problème de connexion",
      priority: "High",
      status: "À évaluer",
      unreadMessages: 1,
    },
    {
      id: "9",
      subject: "Suivi erreur de paiement",
      priority: "Medium",
      status: "À évaluer",
      unreadMessages: 0,
    },
  ];

  const [selectedPriority, setSelectedPriority] = useState("All");
  const [ratings, setRatings] = useState({});

  const filterTickets = () => {
    if (selectedPriority === "All") {
      return evaluateTickets;
    }
    return evaluateTickets.filter(
      (ticket) => ticket.priority === selectedPriority
    );
  };

  const handleTicketPress = (ticketId) => {
    navigation.navigate("ShowTicket", {
      ticketId: ticketId,
      tickets: evaluateTickets,
      showBtnMessage: false,
    });
  };

  const handleRatingChange = (ticketId, rating) => {
    setRatings({ ...ratings, [ticketId]: rating });
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.instructionText}>
          Ces tickets sont en attente de votre évaluation.
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

        <ScrollView style={styles.ticketsListContainer}>
          {filterTickets().map((item) => (
            <View key={item.id} style={styles.ticketItemContainer}>
              <TicketCard
                ticket={item}
                onPress={handleTicketPress}
                showRating={true}
                rating={ratings[item.id] || 0}
                onRatingChange={(rating) => handleRatingChange(item.id, rating)}
              />
            </View>
          ))}
        </ScrollView>
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
    marginBottom: 20,
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
  ticketItemContainer: {
    marginBottom: 25,
  },
});

export default IndexEvaluateTicketScreen;
