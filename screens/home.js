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


function HomeScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState([]);

  const handlePress = ({ title, id }) => { };

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/movies?p=1&l=6`)
      .then((response) => response.json())
      .then((data = []) => {
        if (!data.length) {
          setError("No movies available");
          return setLoading(false);
        }

        setLoading(false);
        setData(data);

        if (error) setError(null);
      })
      .catch((e) => {
        setLoading(false);
        setError("Fetching movies failed");
      });
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  if (error) return <Text>ERROR: {error}</Text>;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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

        <MovieSection onPress={handlePress}
          data={data}
          title="Romantic Movies">

        </MovieSection>
        <MovieSection
          onPress={handlePress}
          data={data}
          title="Comedy Movies">

        </MovieSection>
        <MovieSection
          onPress={handlePress}
          data={data}
          title="Thriller Movies">

        </MovieSection>
        <MovieSection
          onPress={handlePress}
          data={data}
          title="Horror Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Scifi Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Fantasy Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Drama Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Crime Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Action Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Mystery Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Animation Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Adventure Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Comedy-Romance Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
        title="Action-Comedy Movies">

        </MovieSection>
        <MovieSection
        onPress={handlePress}
        data={data}
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
    backgroundColor:"#f0f"
  },
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },
});