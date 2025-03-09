import { View, Text, StyleSheet } from "react-native";

const StatsTickets = () => {
  const ticketStats = {
    open: 4,
    inProgress: 3,
    toEvaluate: 2,
    closed: 3,
  };

  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsCardContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{ticketStats.open}</Text>
          <Text style={styles.statLabel}>Ouverts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{ticketStats.inProgress}</Text>
          <Text style={styles.statLabel}>En cours</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{ticketStats.toEvaluate}</Text>
          <Text style={styles.statLabel}>À évaluer</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{ticketStats.closed}</Text>
          <Text style={styles.statLabel}>Fermés</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  statsCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "500",
    color: "#888",
  },
});

export default StatsTickets;
