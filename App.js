import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import axios from "axios";

export default function App() {
  const message = () => {
    axios
      .get("http://mobile.study.or.kr:3000")
      .then(data => {
        console.log(data);
      })
      .catch(e => console.error(e));
  };
  return (
    <View style={styles.container}>
      <Text onPress={message}>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
