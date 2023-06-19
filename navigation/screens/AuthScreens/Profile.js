
import { Text, View , StyleSheet,Dimensions, Image } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { changeData, user } from '../../data';
import { Button } from 'react-native';

const { height } = Dimensions.get("window");

export default  LoginScreen = () => {

    const [auth, setAuth] = useState({
        email : "",
        password : ""
    });

    const onChangeEmail = email => {
        setAuth({
            ...auth ,
            email
        })
        
    }

    const onChangePassword = password => {
        setAuth({
            ...auth ,
            password
        })
        
    }


    const onSubmit = async () => {
        const res = await axios.post("http://192.168.1.64:5000/auth/signin",
        auth
      );

      changeData(res.data);
        
    }

  return (
        <View
        style={{
          padding: 5,
        }}
      >
        {user.role === "doctor"  ? 
        <Text style={styles.doctorTect} >UN DOCTOR</Text> :
        <Text style={styles.noDoctorText}  >N'EST PAS UN DOCTOR</Text>}
        {user.sexe === "female"  ? 
        <Image style={styles.image} source={require("../../../assets/images/femaleAv.png")} /> :
        <Image style={styles.image} source={require("../../../assets/images/manAv.png")} />}
        
        <Text style={styles.nametext}>{user.familyName.toUpperCase()} {user.firstName}</Text>
        <Text style={styles.emailtext}>{user.adresse}</Text>
        <Text style={styles.emailtext} >{user.phone}</Text>
        <Button title="Se déconnecter" color={"#f008"}/>
        
        
        

      </View>
  );
}


  const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    nametext : {
      paddingVertical : 10,
      alignSelf : "center",
      fontSize : 30

    },
    doctorTect : {
      backgroundColor : "#0f08",
      color : "#fff",
      borderRadius : 5,
      width : 100,
      padding : 5,
      alignSelf : 'flex-end'
    },
    noDoctorText : {
      backgroundColor : "#f008",
      color : "#fff",
      borderRadius : 5,
      width : 100,
      padding : 5,
      alignSelf : 'flex-end'
    },
    emailtext : {
      paddingVertical : 5,
      alignSelf : "center",
      fontSize : 15
    },
    image : {
       marginVertical : 10,
        width : 150,
        height : 150,
        alignSelf : 'center'
    }
  })