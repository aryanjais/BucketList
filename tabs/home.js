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
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';
import latest from '../genre/latest.json'
import data from '../movies.json'
import ada from '../genre/top.json';
import horrror from '../genre/horror.json';
import thriller from '../genre/thriller.json';
import comedy from '../genre/comedy.json'
import romance from '../genre/romance.json'
import scifi from '../genre/scifi.json';
import fantasy from '../genre/fantasy.json';
import drama from '../genre/drama.json';
import crime from '../genre/crime.json';
import action from '../genre/action.json';
import mystery from '../genre/mystery.json';
import animation from '../genre/animation.json';
import adven from '../genre/adventure.json';
import actioncom from '../genre/actioncomedy.json';
import superhero from  '../genre/superhero.json';
import comrom from  '../genre/comedyromance.json'


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
          data={latest}
          title="Latest movies"
        ></MovieSection>
        <MovieSection
          onPress={handlePress}
          data={ada}
          title="Top rated movies"
        ></MovieSection>
        <MovieSection onPress={handlePress}
          data={romance}
          title="Romantic Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={comedy}
        title="Comedy Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={thriller}
        title="Thriller Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={horrror}
        title="Horror Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={scifi}
        title="Scifi Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={fantasy}
        title="Fantasy Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={drama}
        title="Drama Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={crime}
        title="Crime Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={action}
        title="Action Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={mystery}
        title="Mystery Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={animation}
        title="Animation Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={adven}
        title="Adventure Movies">
        

        </MovieSection>


        <MovieSection
        onPress={handlePress}
        data={comrom}
        title="Comedy-Romance Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={actioncom}
        title="Action-Comedy Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={superhero}
        title="Superhero Movies">

        </MovieSection>


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