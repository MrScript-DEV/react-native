import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { index as fetchTickets } from "../services/ticket";

const StatsTickets = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetchTickets();
        const tickets = res.data;

        const computedStats = {
          open: tickets.filter((t) => t.status.id === 1).length,
          inProgress: tickets.filter((t) => t.status.id === 2).length,
          toEvaluate: tickets.filter((t) => t.status.id === 3 && t.rating === 0)
            .length,
          closed: tickets.filter((t) => t.status.id === 3 && t.rating > 0)
            .length,
        };

        setStats(computedStats);
      } catch (err) {
        console.error("Erreur lors du chargement des stats :", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading || !stats) {
    return <ActivityIndicator size="large" color="#007bff" />;
  }

  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsCardContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.open}</Text>
          <Text style={styles.statLabel}>Ouverts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.inProgress}</Text>
          <Text style={styles.statLabel}>En cours</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.toEvaluate}</Text>
          <Text style={styles.statLabel}>À évaluer</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.closed}</Text>
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
