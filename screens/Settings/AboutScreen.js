import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Importez ScrollView
import PageLayout from "../../components/PageLayout";

const AboutScreen = () => {
  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notre Mission</Text>
          <Text style={styles.sectionText}>
            Cette application a été conçue pour simplifier la gestion de vos
            tickets de support. Notre objectif est de vous offrir une plateforme
            intuitive et efficace pour soumettre, suivre et évaluer vos demandes
            d'assistance.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fonctionnalités clés</Text>
          <Text style={styles.sectionText}>
            Avec notre application, vous pouvez :{"\n\n"}- Soumettre facilement
            de nouveaux tickets de support en décrivant précisément votre
            problème.
            {"\n\n"}- Suivre en temps réel l'état de vos tickets et les échanges
            avec l'équipe de support.
            {"\n\n"}- Filtrer et organiser vos tickets par priorité et statut
            pour une meilleure gestion.
            {"\n\n"}- Évaluer la qualité du support reçu une fois votre ticket
            résolu.
            {"\n\n"}- Consulter l'historique de vos tickets fermés pour un suivi
            complet.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Créé par</Text>
          <Text style={styles.sectionText}>
            Cette application est un projet réalisé par Andrea Marucci [Support
            Script].
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.sectionText}>
            Pour toute question, suggestion ou problème rencontré avec
            l'application, n'hésitez pas à nous contacter à l'adresse suivante :{" "}
            <Text style={styles.contactEmail}>support@script.ch</Text>
          </Text>
        </View>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 30,
    alignItems: "stretch",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
    textAlign: "left",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    textAlign: "justify",
  },
  contactEmail: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});

export default AboutScreen;
