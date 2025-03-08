// ShowTicketScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PageLayout from "../../components/PageLayout";
import MessageList from "../../components/MessageList";

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

const ShowTicketScreen = ({ route }) => {
  const { ticketId } = route.params;

  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: "1",
      user: "Support",
      message: "Bonjour, comment puis-je vous aider ?",
    },
    {
      id: "2",
      user: "Utilisateur",
      message: "J'ai un problème de connexion.",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const foundTicket = tickets.find((ticket) => ticket.id === ticketId);
    setTicket(foundTicket);
  }, [ticketId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: (messages.length + 1).toString(),
        user: "Utilisateur",
        message: newMessage,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage("");
    }
  };

  return (
    <PageLayout>
      {ticket && (
        <>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketSubject}>{ticket.subject}</Text>
            <Text style={styles.ticketDetails}>
              Priorité :{" "}
              {ticket.priority === "High"
                ? "Élevée"
                : ticket.priority === "Medium"
                ? "Moyenne"
                : "Faible"}
            </Text>
            <Text style={styles.ticketDetails}>Statut : {ticket.status}</Text>
          </View>

          <MessageList messages={messages} />

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
        </>
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
    backgroundColor: "#4da6ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ShowTicketScreen;
