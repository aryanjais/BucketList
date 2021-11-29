import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

function Horror({ title, data, onPress }) {
  const keyExtractor = (item, index) => item.id;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.cardOuterContainer}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: item.backimg,
        }}
      />
      <View style={styles.cardInnerContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={keyExtractor}
          data={data}
          horizontal
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

export default Horror;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardOuterContainer: {
    position: "relative",
    width: 140,
    height: 200,
    backgroundColor: "gray",
    marginRight: 10,
  },
  cardImage: { width: "100%", height: "100%", position: "absolute" },
  cardInnerContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: "white",
  },
  cardDescription: {
    color: "white",
  },
});