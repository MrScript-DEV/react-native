import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StarRating from "./StarRating";

const TicketCard = ({
  ticket,
  onPress,
  showRating,
  rating,
  onRatingChange,
}) => {
  const getPriorityBadgeStyles = (priority) => {
    switch (priority) {
      case "High":
        return { backgroundColor: "#ff4d4d", textColor: "#fff" };
      case "Medium":
        return { backgroundColor: "#ffcc00", textColor: "#333" };
      case "Low":
        return { backgroundColor: "#4da6ff", textColor: "#fff" };
      default:
        return { backgroundColor: "#f0f0f0", textColor: "#333" };
    }
  };

  const badgeStyles = getPriorityBadgeStyles(ticket.priority);

  return (
    <TouchableOpacity
      style={styles.ticketCard}
      onPress={() => onPress(ticket.id)}
    >
      <View style={styles.ticketHeader}>
        {ticket.status === "En attente" && (
          <Ionicons
            name="time-outline"
            size={20}
            color="gray"
            style={styles.statusIcon}
          />
        )}
        <Text style={styles.ticketSubject}>{ticket.subject}</Text>
      </View>
      <View style={styles.ticketFooter}>
        <View
          style={[
            styles.priorityBadge,
            { backgroundColor: badgeStyles.backgroundColor },
          ]}
        >
          <Text
            style={[styles.priorityBadgeText, { color: badgeStyles.textColor }]}
          >
            {ticket.priority === "High"
              ? "Élevée"
              : ticket.priority === "Medium"
              ? "Moyenne"
              : "Faible"}
          </Text>
        </View>

        {ticket.unreadMessages > 0 && (
          <View style={styles.unreadMessagesBadge}>
            <Text style={styles.unreadMessagesText}>
              {ticket.unreadMessages === 1
                ? `${ticket.unreadMessages} message`
                : `${ticket.unreadMessages} messages`}
            </Text>
          </View>
        )}
      </View>

      {showRating && (
        <View style={styles.ratingSection}>
          <Text style={styles.ratingLabel}>Evaluation :</Text>
          <StarRating
            maxStars={5}
            rating={rating}
            onRatingChange={onRatingChange}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: "column",
  },
  ticketSubject: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  ticketHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  priorityBadge: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  priorityBadgeText: {
    fontSize: 14,
    fontWeight: "600",
  },
  unreadMessagesBadge: {
    backgroundColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  unreadMessagesText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  statusIcon: {
    marginRight: 5,
  },
  ticketFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  ratingSection: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
    marginRight: 0,
  },
});

export default TicketCard;
