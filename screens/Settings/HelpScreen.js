import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PageLayout from "../../components/PageLayout";

const HelpScreen = () => {
  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comment créer un ticket ?</Text>
          <Text style={styles.sectionText}>
            Pour soumettre un nouveau ticket, rendez-vous sur l'écran "Tableau
            de bord" et appuyez sur le bouton "Créer un Ticket". Remplissez
            ensuite le formulaire en décrivant votre problème le plus
            précisément possible, choisissez la priorité et soumettez votre
            demande.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Comment consulter le statut de mon ticket ?
          </Text>
          <Text style={styles.sectionText}>
            Tous vos tickets en cours sont listés sur l'écran "Tickets en
            cours". Le statut de chaque ticket est indiqué directement sur la
            carte du ticket. Vous pouvez également appuyer sur un ticket pour
            voir le détail et l'historique des messages.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Comment répondre à un message sur un ticket ?
          </Text>
          <Text style={styles.sectionText}>
            Pour répondre à un message, appuyez sur le ticket concerné depuis
            l'écran "Tickets en cours". Au bas de l'écran de détail du ticket,
            vous trouverez un champ de texte pour saisir votre message. Une fois
            rédigé, appuyez sur le bouton "Envoyer" pour transmettre votre
            réponse à l'équipe de support.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAQ - Questions fréquentes</Text>
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>
              Q: Combien de temps avant d'obtenir une réponse ?
            </Text>
            <Text style={styles.faqAnswer}>
              R: Notre équipe s'efforce de répondre à toutes les demandes dans
              un délai de 24 heures ouvrées. Les tickets de haute priorité sont
              traités en priorité.
            </Text>
          </View>
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>
              Q: Puis-je modifier un ticket après sa soumission ?
            </Text>
            <Text style={styles.faqAnswer}>
              R: Une fois soumis, certaines informations du ticket ne peuvent
              être modifiées directement. Si vous devez apporter des
              modifications importantes, veuillez répondre au ticket en
              précisant les changements souhaités.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contactez-nous</Text>
          <Text style={styles.sectionText}>
            Si vous n'avez pas trouvé de réponse à votre question dans cette
            section, ou pour toute autre demande, vous pouvez contacter notre
            support directement par email à l'adresse :{" "}
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
    marginBottom: 15,
    textAlign: "left",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    textAlign: "justify",
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  faqAnswer: {
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

export default HelpScreen;
