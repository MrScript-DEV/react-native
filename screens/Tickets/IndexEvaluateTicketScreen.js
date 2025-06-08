import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import PageLayout from "../../components/PageLayout";
import TicketCard from "../../components/TicketCard";
import { index as fetchTickets } from "../../services/ticket";
import { index as fetchPriorities } from "../../services/priority";
import { updateRating } from "../../services/ticket";

const IndexEvaluateTicketScreen = ({ navigation }) => {
  const [tickets, setTickets] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [selectedPriorityId, setSelectedPriorityId] = useState("");
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPriorities = async () => {
      try {
        const res = await fetchPriorities();
        setPriorities(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des priorités :", err.message);
      }
    };
    loadPriorities();
  }, []);

  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      try {
        const res = await fetchTickets(3, selectedPriorityId || undefined);
        const nonRatedTickets = res.data.filter((t) => t.rating === 0);
        setTickets(nonRatedTickets);
      } catch (err) {
        console.error("Erreur lors du chargement des tickets :", err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTickets();
  }, [selectedPriorityId]);

  const handleTicketPress = (ticketId) => {
    navigation.navigate("ShowTicket", {
      ticketId,
      showBtnMessage: false,
    });
  };

  const handleRatingChange = async (ticketId, rating) => {
    setRatings((prev) => ({ ...prev, [ticketId]: rating }));

    try {
      await updateRating(ticketId, rating);
      console.log(`Rating mis à jour pour le ticket ${ticketId} : ${rating}`);
    } catch (err) {
      console.error(`Erreur lors de la mise à jour du rating :`, err.message);
    }
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.instructionText}>
          Ces tickets sont en attente de votre évaluation.
        </Text>

        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Filtrer par priorité :</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedPriorityId}
              style={styles.picker}
              dropdownIconColor="#333"
              onValueChange={(value) => setSelectedPriorityId(value)}
            >
              <Picker.Item label="Tout" value="" />
              {priorities.map((priority) => (
                <Picker.Item
                  key={priority.id}
                  label={priority.name}
                  value={priority.id}
                />
              ))}
            </Picker>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <ScrollView style={styles.ticketsListContainer}>
            {tickets.map((item) => (
              <View key={item.id} style={styles.ticketItemContainer}>
                <TicketCard
                  ticket={item}
                  onPress={handleTicketPress}
                  showRating={true}
                  rating={ratings[item.id] || 0}
                  onRatingChange={(rating) =>
                    handleRatingChange(item.id, rating)
                  }
                />
              </View>
            ))}
          </ScrollView>
        )}
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
