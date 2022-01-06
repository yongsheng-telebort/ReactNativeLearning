import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Button
        title="Start"
        style={styles.button}
        onPress={() => navigation.navigate("Info")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
  button: {
    fontSize: 24,
    color: "white",
  },
});

export default HomeScreen;
