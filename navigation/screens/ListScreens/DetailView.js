import axios from 'axios';
import { useEffect, useState } from 'react';
import {StyleSheet, View, Text ,Dimensions, ActionSheetIOS, ActivityIndicator, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { calcSpo2 } from '../../data';
import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native';
const width = Dimensions.get("window").width + 60;
let SPO2 = 0;
export default  HomeScreen = ({navigation}) => {

    const id = navigation.getParam('id');
    const [ppgInfraRed, setPpgInfraRed] = useState([]);
    const [ppgRed, setPpgRed] = useState([]);
    const [value, setValue] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const onChangeValue = (v) => {
      setValue(v);
    }

    const sendReport = async () => {
      const res = await axios.patch(`http://192.168.1.64:5000/notes-de-frais/${id}`,{report : value});
      if(res.status === 200) {
        alert("Le rapport est envoyé");
      }
      
    }
    const fetchData = async () => {
        const res = await axios.get(`http://192.168.1.64:5000/notes-de-frais/${id}`);
        let ppgR = res.data.ppgRed;
        let ppgIR = res.data.ppgInfraRed;
        ppgR = ppgR.filter((item,index)=>index>250);
        ppgIR = ppgIR.filter((item,index)=>index>250);
        
        await setPpgInfraRed(ppgIR);
        await setPpgRed(ppgR)
    }

    
    
if((ppgRed.length <= 700) ){
    return (
        <View>
            <ActivityIndicator size="large"  style={styles.indicator}
             />
        </View>
      );


}else {
  SPO2 = calcSpo2(ppgRed,ppgInfraRed);
    return (
        <View>
            <LineChart
    data={{
      
      datasets: [
          {
             data : ppgRed,//detail.ppgInfraRed
            color : (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          },
          {
            data : ppgInfraRed,//detail.ppgInfraRed
           color : (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,

         }
          
          


        
        
      ]
    }}
    width={width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#eee",//"#e26a00",
      backgroundGradientFrom: "#eee",//"#fb8c00",
      backgroundGradientTo: "#eee",//"#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 0,
        padding : 1,
      },
      propsForDots: {
        r: "0",
        strokeWidth: "1",
        stroke: "#000",//"#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 1,
      borderRadius: 3,
      marginLeft : -60
    }}
  />
  <View
  style={styles.ImageBackground} >
    <Text style={styles.insideHeart} >
        90BPM
        </Text>
      <Text style={styles.insideHeart} >
        
        {calcSpo2(ppgRed,ppgInfraRed)+"%"}
        </Text>
  </View>
  <TextInput
        onChangeText={(v)=>onChangeValue(v)}
        style={styles.TextInput}
        placeholder='Remplir le rapport du diagnostque' />
        <View style={{height : 10}}></View>
        <Button
        onPress={()=>sendReport()} 
        title= "Envoyer le rapport" />
        {/* <View style={{height : 10}}></View>
        <Button
        onPress={()=>sendReport()} 
        title= "REFAIRE L'ACQUISITION" />
         */}
        </View>
        
      );
}
  
}


const styles = StyleSheet.create({
  insideHeart : {
    alignSelf : "center",
    color : "#fff",
    fontSize : 60,
  },
    text : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
      fontSize : 20
    },
    TextInput : {
      width : "100%",
      height : 180,
      borderColor : "#0f08",
      backgroundColor : "#fff",
      marginVertical : 5,
      borderWidth : 1,
      borderRadius : 10
    },
    ImageBackground : {
      justifyContent : "center",
      width : width,
      height : 150,
      alignSelf : "center",
      backgroundColor : (true ? "#0f08" : "#f008")

    },
    indicator : {
        margin : 100
    }
  })
  
  