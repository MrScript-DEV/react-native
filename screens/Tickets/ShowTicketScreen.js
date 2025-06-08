import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PageLayout from "../../components/PageLayout";
import MessageList from "../../components/MessageList";
import { show as fetchTicket } from "../../services/ticket";
import { create as sendMessageToApi } from "../../services/message";

const ShowTicketScreen = ({ route }) => {
  const { ticketId, showBtnMessage = true } = route.params;

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const loadTicket = async () => {
      try {
        const res = await fetchTicket(ticketId);
        setTicket(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement du ticket :", err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTicket();
  }, [ticketId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        const res = await sendMessageToApi(ticket.id, newMessage);
        const addedMessage = {
          id: res.data.id,
          user: res.data.user
            ? res.data.user
            : { first_name: "Vous", roles: ["User"] },
          content: res.data.content,
        };

        setTicket((prev) => ({
          ...prev,
          messages: [...prev.messages, addedMessage],
        }));

        setNewMessage("");
      } catch (err) {
        console.error("Erreur lors de l'envoi du message :", err.message);
      }
    }
  };

  const formatMessages = (messages) =>
    messages.map((msg) => ({
      id: msg.id.toString(),
      user: msg.user.roles.includes("Support")
        ? "Support"
        : `${msg.user.first_name} ${msg.user.last_name}`,
      message: msg.content,
    }));

  return (
    <PageLayout>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : ticket ? (
        <>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketSubject}>{ticket.subject}</Text>
            <Text style={styles.ticketDetails}>
              Priorité : {ticket.priority.name}
            </Text>
            <Text style={styles.ticketDetails}>
              Statut : {ticket.status.name}
            </Text>
          </View>

          <MessageList messages={formatMessages(ticket.messages)} />

          {showBtnMessage && (
            <View style={styles.sendMessageSection}>
              <TextInput
                style={styles.messageInput}
                value={newMessage}
                onChangeText={setNewMessage}
                placeholder="Écrivez un message..."
                multiline
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendMessage}
              >
                <Text style={styles.sendButtonText}>Envoyer</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <Text style={styles.errorText}>Ticket introuvable.</Text>
      )}
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  ticketInfo: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ticketSubject: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  ticketDetails: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  sendMessageSection: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  messageInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  sendButton: {
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
  sendButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
});

export default ShowTicketScreen;
