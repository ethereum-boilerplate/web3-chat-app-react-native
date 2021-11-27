import React from "react";
import { View, StyleSheet, Text } from "react-native";

//TODO: Uncomment to show ETH address on header
//import Address from "./Address";

export default function Header() {
  return (
    <View style={styles.viewContainer}>
      <Text style={{fontWeight: 'bold', textAlign: 'left'}}>Defi Group Chat</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
