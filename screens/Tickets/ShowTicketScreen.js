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

const ShowTicketScreen = ({ route }) => {
  const { ticketId, tickets, showBtnMessage = true } = route.params;

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
  }, [ticketId, tickets]);

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
});

export default ShowTicketScreen;
