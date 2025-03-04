import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CollageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photo Collage</Text>
      <View style={styles.collageContainer}>
        {/* Displaying images from the root folder */}
        <Image source={require("./photo1.jpg")} style={styles.image} />
        <Image source={require("./photo2.jpg")} style={styles.image} />
        <Image source={require("./photo3.jpg")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  collageContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  image: { width: 100, height: 100, margin: 5, borderRadius: 10 },
});

export default CollageScreen;
