import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Photo Collage App!</Text>
      <Button title="View Collage" onPress={() => navigation.navigate("Collage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
