import React ,{useState}from "react";
import { StyleSheet, Text, View ,FlatList,ScrollView} from "react-native";

export default function ListScreen() {
    const [addToList, setAddToList] = useState('');

    function addToListHandler(title){
        setAddToList();
    };
  return (
    <View style={styles.container}>
        <FlatList>
            <Text>First Movie</Text>
            <Text>ANother Movie</Text>
        </FlatList>
        
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