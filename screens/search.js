import axios from "axios";
import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput, ScrollView,Image,TouchableHighlight } from "react-native";
// import {createAppContainer} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'

// export default function SearchScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>This is the search screen</Text>
//     </View>
//   );
// }
// apikey=http://www.omdbapi.com/?i=tt3896198&apikey=c4d79353

import { SearchBar } from 'react-native-elements';

export default function SearchScreen(){
  const apiurl="http://www.omdbapi.com/?apikey=c4d79353"
  const [state,setState] = useState({
    s:"Enter a Movie...",
    results:[],
    selected:{}
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({data})=>{
      let results = data.Search;
      setState(prevState => {
        return { ...prevState,results:results}
      })
    })
  }
  const openPopup = id => {
    axios(apiurl +"&i="+id).then(({data})=>{
      let result =data;

      console.log(result);
      setState(prevState => {
        return{ ...prevState,selected:result}
      })
    })
  }

  return(
    <View style={styles.container}>
        <TextInput
        style={styles.searchbox}
        onChangeText={text => setState(prevState =>
          {
          return{...prevState,s:text}
        })}
          onSubmitEditing={search}
        value={state.s}
        />
        <ScrollView styles={styles.results}>
          {state.results.map(result =>(
            <TouchableHighlight 
            key={result.imdbID} 
            onPress={()=> openPopup(result.imdbID)}>
            <View style={styles.result}>
              <Text style={styles.heading}>{result.Title}</Text>
              <Image style={styles.poster} source={{uri:result.Poster}}></Image>
              </View>
              </TouchableHighlight>

          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchbox:{
    fontSize:20,
    fontWeight:'300',
    backgroundColor:'black',
    color:'white',
    borderRadius:5,
    width:'95%',
    height:50,
    margin:0,
    padding:10,


  },
  results:{
    flex:1,

  },
  result:{
    flex:1,
    // width:'100%',
    marginBottom:20,
  },
  heading:{
    // color:'#FFF',
    fontSize:18,
    fontWeight:'700',
    padding:20,
    // backgroundColor:'#445565',
  },
  poster:{
    height:300,
    resizeMode:'contain'

  }
});










// export default class SearchScreen extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }