import axios from "axios";
import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput, ScrollView,Image,TouchableHighlight,Modal } from "react-native";
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
    s:"",
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

      // console.log(result);
      setState(prevState => {
        return{ ...prevState,selected:result}
      })
    })
  }

  return(
    <View style={styles.container}>
        <TextInput
        placeholder="Search movie..."
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
        <Modal
        animationType='fade'
        transparent={false}
        visible={(typeof state.selected.Title != "undefined")}
        >
          <ScrollView style={styles.popup}>
            <Image style={styles.popposter} source={{uri:state.selected.Poster}}></Image>
            
            <Text style={[styles.poptitle,styles.pop]}>{state.selected.Title}</Text>

            <Text style={[styles.poprating,styles.pop]}>Rating</Text>
            <Text style={[styles.poptitle1,styles.pop1]}>{state.selected.imdbRating}</Text>

            <Text style={[styles.popplot,styles.pop]}>Plot</Text>
            <Text style={[styles.popplot1,styles.pop1]}>{state.selected.Plot}</Text>

            <Text style={[styles.poprelease,styles.pop]}>Release Date</Text>
            <Text style={[styles.poprelease1,styles.pop1]}>{state.selected.Released}</Text>

            <Text style={[styles.popruntime,styles.pop]}>Runtime</Text>
            <Text style={[styles.popruntime1,styles.pop1]}>{state.selected.Runtime}</Text>

            <Text style={[styles.popcast,styles.pop]}>Cast</Text>
            <Text style={[styles.popcast1,styles.pop1]}>{state.selected.Actors}</Text>


            <TouchableHighlight
            onPress={()=>setState(prevState => {
              return{ ...prevState,selected:{}}
            })}>
              <Text style={[styles.closeBtn,styles.pop]}>Close</Text>
            </TouchableHighlight>
          </ScrollView>
        </Modal>
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
    // backgroundColor:'black',
    // color:'white',
    borderColor:'black',
    borderWidth:2,
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

  },
  popposter:{
    height:400,
    resizeMode:'contain'

  },
  pop:{
    margin:10,
    fontSize:18,
    fontWeight:'700',
    // borderBottomWidth:1,
    borderColor:'black',
    
  },
  pop1:{
    margin:10,
    fontSize:16,

  },
  closeBtn:{
    backgroundColor:'skyblue',
    width:'auto',
    padding:10,
    borderRadius:8,
  
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