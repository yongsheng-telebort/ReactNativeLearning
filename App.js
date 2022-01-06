import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Button
        title="Start"
        style={styles.button}
        onPress={() => Alert.alert("Let's go")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  button: {
    fontSize: 24,
    color: "white",
    backgroundColor: "blue",
  },
});
