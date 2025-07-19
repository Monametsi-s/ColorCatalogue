import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TextInput1() {

  const [num, setNum] = useState(0);
  const [col, setCol] = useState("#437fbeff")
async function handlePress() {
    setNum((currentNum) => currentNum + 1);
    alert(`Number increased by one `);
  }

  function changeCol() {
    setCol(col === "#437fbeff" ? "purple" : "#437fbeff");
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a number"
        value={num.toString()}
        editable={false}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handlePress}
        onLongPress={changeCol}
        style={{
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: col,
          borderRadius: 5,
        }}
        >

          <Text style={{ color: 'white', fontSize: 18 }}>Press me</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "#aaa",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#437fbe",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
