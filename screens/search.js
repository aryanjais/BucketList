import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {createAppContainer} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'

// export default function SearchScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>This is the search screen</Text>
//     </View>
//   );
// }

import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});