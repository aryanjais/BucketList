import React, { useEffect } from "react";
import { API_BASE_URL } from "@env";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import MovieSection from "../components/movieSection";
import Romance from "../components/Romance";
import Comedy from "../components/Comedy";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';
import data from '../movies.json'
function HomeScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  // const [data, setData] = React.useState([]);

  const handlePress = ({ title, id }) => { };

  // var axios = require("axios").default;
  // useEffect(() => {


  //   setLoading(true);
  //   fetch(`${API_BASE_URL}`)
  //     .then((response) => response.json())
  //     .then(dat => {
  //       // console.log(dat);
  //       setLoading(false);
  //       setData(dat);

  //       if (error) setError(null);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setLoading(false);
  //       setError("Fetching movies failed");
  //     });
  // }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  if (error) return <Text>ERROR: {error}</Text>;

  return (

    <SafeAreaView>
      <ScrollView>
        <MovieSection
          onPress={handlePress}
          data={data}
          title="Latest movies"
        ></MovieSection>
        <MovieSection
          onPress={handlePress}
          data={data}
          title="Top rated movies"
        ></MovieSection>
        <Romance onPress={handlePress}
          data={data}
          title="Romantic Movies">

        </Romance>
        <Comedy
        onPress={handlePress}
        data={data}
        title="Comedy Movies">

        </Comedy>

      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },
});