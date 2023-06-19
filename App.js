import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return ( 
    <View style={styles.text} >
      
      <MainContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    fontSize : 40
  }
})
