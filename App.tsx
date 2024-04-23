import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { Responses } from "./assets/data/Responses";
import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState<String>("Shake the Magic 8 Ball!");
  const changeResponse = (): void => {
    setResponse(Responses[Math.floor(Math.random() * 20)]);
  };
  return (
    <View style={styles.container}>
      <Text>{response}</Text>
      <Button onPress={changeResponse} title="Press"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
  },
});
