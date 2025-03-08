// components/MessageList.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageList = ({ messages }) => {
  return (
    <View style={styles.messagesSection}>
      <Text style={styles.messagesTitle}>Messages :</Text>
      {messages.map((item) => (
        <View
          key={item.id}
          style={[
            styles.messageCard,
            item.user === "Utilisateur" && styles.userMessageCard,
          ]}
        >
          <Text
            style={[
              styles.messageUser,
              item.user === "Utilisateur" && styles.userMessageUser,
            ]}
          >
            {item.user}:
          </Text>
          <Text
            style={[
              styles.messageText,
              item.user === "Utilisateur" && styles.userMessageText,
            ]}
          >
            {item.message}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  messagesSection: {
    marginBottom: 20,
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  messageCard: {
    backgroundColor: "#e9e9e9",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  userMessageCard: {
    backgroundColor: "#4da6ff",
  },
  messageUser: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  userMessageUser: {
    color: "#fff",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  userMessageText: {
    color: "#fff",
  },
});

export default MessageList;
