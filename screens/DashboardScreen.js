import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import PageLayout from "../components/PageLayout";
import StatsTickets from "../components/StatsTickets";
import CustomButton from "../components/CustomButton";

const DashboardScreen = ({ navigation }) => {
  return (
    <PageLayout>
      <StatsTickets />

      <View style={styles.cardContainer}>
        <CustomButton
          iconSource={require("../assets/icons/create_ticket_icon.png")}
          buttonText="Créer un Ticket"
          onPress={() => navigation.navigate("CreateTicket")}
        />

        <CustomButton
          iconSource={require("../assets/icons/messages_icon.png")}
          buttonText="Tickets en cours"
          onPress={() => navigation.navigate("IndexTicket")}
        />

        <CustomButton
          iconSource={require("../assets/icons/evaluate_icon.png")}
          buttonText="Tickets à évaluer"
          onPress={() => navigation.navigate("IndexEvaluateTicket")}
        />

        <CustomButton
          iconSource={require("../assets/icons/history_icon.png")}
          buttonText="Tickets fermés"
          onPress={() => navigation.navigate("IndexHistoryTicket")}
        />

        <CustomButton
          iconSource={require("../assets/icons/settings_icon.png")}
          buttonText="Paramètres"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardScreen;
