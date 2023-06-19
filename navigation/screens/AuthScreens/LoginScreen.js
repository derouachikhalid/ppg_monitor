
import { Text, View , StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import AppTextInput from '../../../componnents/AppTextInput';
import { useState } from 'react';
import axios from 'axios';
import { changeData, user } from '../../data';

const { height } = Dimensions.get("window");


export default  LoginScreen = ({navigation}) => {

    const [auth, setAuth] = useState({
        email : "",
        password : ""
    });
    setInterval(()=>{
      if(user.id){
        navigation.navigate("Profile");
      }
    },0)
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
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "#1f41bb",
              marginVertical: 10,
            }}
          >
            S'AUTHENTIFIER
          </Text>
          <Text
            style={{
              fontSize: 15,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            votre consultation dans une seule click
          </Text>
        </View>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <AppTextInput 
          placeholder="Email" 
          value={auth.email}
          onChangeText={(e)=>onChangeEmail(e)} />
          <AppTextInput 
          secureTextEntry={true} 
          value={auth.password} 
          placeholder="Mot de passe"
          onChangeText={(e)=>onChangePassword(e)} />
        </View>
        <TouchableOpacity
        onPress={onSubmit}
          style={{
            padding: 5,
            backgroundColor: "#1f41bb",
            marginVertical: 5,
            borderRadius: 10,
            shadowColor: "#1f41bb",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            SE CONNECTER
          </Text>
        </TouchableOpacity>


      </View>
  );
}


  const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    image : {
        flex : 1
    }
  })