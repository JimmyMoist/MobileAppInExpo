import { Button, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Photo Collage App!</Text>
      <Button title="View Collage" onPress={() => navigation.navigate("Collage")} />
    </View>
  );
};
