
import { useState , useEffect } from 'react';
import {  View, Text,StyleSheet , Image,  TouchableOpacity } from 'react-native';
import { user } from '../../data';



export default  HomeScreen = ({navigation}) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      setUserData(user)
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  
    
  

      let i = 2;
    const images = {
      2 :require("../../../assets/images/welcome_monitor/2.png"),
      3 :require("../../../assets/images/welcome_monitor/3.png")
    }


    

    const startMonitor = () => {
      navigation.navigate('ReviewDetails')

    }

    

  return (
    <View style={styles.item} >
      <View style={styles.authContainer}>
        <Text style={styles.text}>You are connected with :</Text>
        <Text style={styles.textName}>{user.firstName} {user.familyName}</Text>
      </View>
      <Text style={styles.textInst}>Suivre les instructions s'il vous plait</Text>
      
      <Image 
      source={images[i]}
      style={styles.image}
      />
      <Text style={styles.textInst2}>1{") "}Vérifiez que l'oxymètre est allumé. </Text>
      <Text style={styles.textInst2}>2{") "}Vérifiez que l'oxymètre est connecté à l'application.</Text>
      <Text style={styles.textInst2}>3{") "}introduit le doit entre les LEDs et le capteur. </Text>
      <Text style={styles.textInst2}>4{") "}Cliquez sur Lancer l'acquistion. </Text>
      <View style={{
        flexDirection : "row",
        justifyContent : "space-between"
      }
      }>
        <TouchableOpacity
        onPress={startMonitor}
        style={{
          flex : 1,
          alignSelf : "center",
          width : "80%",
          backgroundColor : "#6f6",
          borderRadius : 5,
          marginVertical : 30
        }}
         >
          <Text style={styles.text}>Lancer l'acquisition</Text>

        </TouchableOpacity>
        

      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
    text : {
      padding : 5,
      alignSelf : "center",
      justifyContent : "center",
      fontSize : 20,
      color : "#fff"
    },
    item : {
      margin : 0,
      borderRadius : 0,
      padding : 4,
      paddingHorizontal : 20
    },
    image : {
      marginVertical : 30,
      alignSelf : "center",
      width : 150,
      height : 150
    },
    authContainer : {
      margin : 5,
      padding : 10,
      backgroundColor : "#6f6",
      borderRadius : 6,
    },
    textName : {
      alignSelf : "center",
      justifyContent : "center",
      fontSize : 20,
      color : "#333",
      paddingVertical : 5
      
    },
    textInst : {
      alignSelf : "center",
      justifyContent : "center",
      fontSize : 15,
      color : "#333",
      paddingVertical : 10
    },
    textInst2 : {
      justifyContent : "center",
      fontSize : 15,
      color : "#333",
      paddingVertical : 10
    }
  })
  
  