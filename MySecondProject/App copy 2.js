import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyApp() {

  function getFullName(fname,mname, lname){
    return fname + " " +mname+" "+lname;
  }

  const developerName = "Santosh";
  
  return (
      <Text>
        {"\n\n"}
        {getFullName("S","K","C")} {"\n"}
        Developed by {developerName}.

      </Text>
  );
  
}


