import axios from 'axios';
import { useEffect, useState } from 'react';
import {StyleSheet, View,Dimensions, ActivityIndicator, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { calcSpo2 } from '../../data';
export default  MonitorScreen = ({navigation}) => {

  const [ppgInfraRed, setPpgInfraRed] = useState([]);
  const [ppgRed, setPpgRed] = useState([]);

  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
     const res = await axios.get(`http://192.168.1.20/ppgSignal`);
     const myJSONData = JSON.stringify(res.data);
     const obj = JSON.parse(myJSONData);
      let ppgIR = obj.ppgInfraRed
      let ppgR = obj.ppgRed
      ppgR = ppgR.filter((item,index)=>index>450);
      ppgIR = ppgIR.filter((item,index)=>index>450);
        
     await setPpgInfraRed(ppgIR);
     await setPpgRed(ppgR)
}
    
  if((ppgRed.length <= 550) ){
    return (
        <View>
            <ActivityIndicator size="large"  style={styles.indicator}
             />
        </View>
      );

}else {
    return (
        <View>
            <LineChart
    data={{
      
      datasets: [
        
          
          {
             data : ppgRed,//detail.ppgInfraRed
            color : (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          },
          {
            data : ppgInfraRed,//detail.ppgInfraRed
           color : (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
         }
          
          


        
        
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#eee",//"#e26a00",
      backgroundGradientFrom: "#eee",//"#fb8c00",
      backgroundGradientTo: "#eee",//"#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
      style: {
        borderRadius: 0,
        padding : 1
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
      borderRadius: 3
    }}
  />
  <Text>{Math.floor(calcSpo2(ppgRed,ppgInfraRed))}</Text>

        </View>
      );
}

  
}


const styles = StyleSheet.create({
  text : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    fontSize : 20
  },
  indicator : {
      margin : 100
  }
})
