import { StyleSheet, Text, View, Button } from "react-native";

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good job!</Text>
      <Button
        title="Back"
        color={"red"}
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
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

export default InfoScreen;
