import { 
  Text, 
  View, 
  TextInput, 
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";


export default function HomeScreen() {
  const [num, setNum] = useState(0)
  const [col, setCol] = useState("#437fbeff")
  const [isDarkMode, setIsDarkMode] = useState(false);

 function toggleTheme() {
    setIsDarkMode((currColor) => !currColor);
    
  }

  async function handlePress() {
    setNum((currentNum) => currentNum + 1);
    alert(`Number increased by one `);
  }

  function changeCol() {
    setCol(col === "#437fbeff" ? "purple" : "#437fbeff");
  }

  return (
    <View 
        style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        alignItems: "center",
      }}
      >

        {/* <TextInput
        placeholder="Enter Name"  
        value= {num.toString()} 
        style={{
          height: 40,
          width: 200,
          borderColor: "#aaa",
          borderWidth: 1,
          paddingHorizontal: 15,
          borderRadius: 5,
          backgroundColor: "#f0f0f0",
        }}
      /> */}

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}

        <TouchableOpacity
        onPress={toggleTheme}
        style={{
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#567673ff",
          borderRadius: 30,
        }}
        >
          <Text style={{ 
            color: 'white', 
            fontSize: 18 }}>
              Change Background
          </Text>
        </TouchableOpacity>


      {/* <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",}}>
        Hello, {name}
      </Text>
      <View>
        <Button title="Enter" onPress={handlePress}
        />
      </View> */}
      </View>
  );

}


