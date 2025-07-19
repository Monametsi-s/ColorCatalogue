import { 
  Text, 
  View, 
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import TextInput1 from "./increase-num";


export default function HomeScreen() {

  const [isDarkMode, setIsDarkMode] = useState(false);

 function toggleTheme() {
    setIsDarkMode((currColor) => !currColor);
    
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

        {/* <TextInput1/> */}
        <FlatList
        data = {[1, 2, 3, 4]}
        renderItem = {({ item }) => (<Text>{item.toString()}</Text>)}
        keyExtractor={(item,index) => index.toString()}
        />

        
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


