import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import * as Brightness from "expo-brightness";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        Brightness.setSystemBrightnessAsync(value);
      }
    })();
  });

  const [value, setValue] = useState(0);
  console.log(Slider);
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Slider
        style={{ width: "70%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        step={0.001}
        minimumTrackTintColor="tomato"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setValue(value)}
      />

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
  },
});
