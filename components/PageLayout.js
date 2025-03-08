import React from "react";
import { ScrollView, SafeAreaView, StyleSheet, View, Text } from "react-native";

const PageLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  content: {
    flex: 1,
  },
});

export default PageLayout;
