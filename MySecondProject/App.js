import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

function MyApp() {

  function getFullName(fname,mname, lname){
    return fname + " " +mname+" "+lname;
  }

  const developerName = "Santosh";
  
  return (

    <View>
      <Text>
        {"\n\n"}
        {getFullName("S","K","C")} {"\n"}
        Developed by {developerName}.

      </Text>

      <TextInput 
      style ={{
        height: 40,
        borderColor: "black",
        borderWidth:1,
        color:"orange"
      }}
      defaultValue="Enter Input">
        
      </TextInput>
      </View>
  );
  
}

export default function MultiComp(){
  return(
    
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'
    }}><Text>{"\n\n"} this new function export MultiComp</Text> 
      <MyApp></MyApp>
      <MyApp></MyApp>
    </View>
    
  )
}


