import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { user } from '../../data';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';

export default  HomeScreen = ({navigation}) => {

  
  const [lists, setLists] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);

  }, []);

    

    const fetchData = async () => {
      if(user.role === "doctor"){
        const res = await axios.get("http://192.168.1.64:5000/notes-de-frais");
        setLists(res.data);
      } else {
        setLists([]);

      }
    }

    const deleteItem =async (id) => {
      const res = await axios.delete(`http://192.168.1.64:5000/notes-de-frais/${id}`);
      if(res.status === 200){
        console.log("good")
      }
       
    }

    const detailView = (id) => {
      navigation.navigate('ReviewDetails', {id})
    }

  if(user.role === "patient") {

    return (<View  >
      <Text style={styles.dangerText}>Seuls les professeurs et les médecins peuvent voir les enregistrements</Text>
    </View>);
  }

  return (
    <View  >
        
        <FlatList
        scrollEnabled
        data={lists}
        renderItem={({item}) => 
        
          <TouchableOpacity
          onPress={()=>detailView(item.id)}
          >
            <View
              style={styles.item}>
                <Text style={styles.text2}>{item.patient.firstName+" "+item.patient.familyName}</Text>
                <Text style={styles.text3}>[{new Date(item.createdAt).toDateString()}]</Text>
                <Button onPress={()=>deleteItem(item.id)} title='DELETE' color={"#f008"}/>
            </View>
          </TouchableOpacity>
        }
        keyExtractor={item => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    text1 : {
      paddingHorizontal : 2.5,
      fontSize : 10,
      width : "15%",
      backgroundColor : "#6f6",
      borderTopLeftRadius : 5,
      borderBottomLeftRadius : 5,
      color : "#fff"
    },
    text2 : {
      fontSize : 15,

    },
    text3 : {
      paddingVertical : 2.5,
      marginHorizontal : 15,
      fontSize : 10,
      color : "#0f08"
    },
    dangerText : {
      
      backgroundColor : "#f55",
      padding : 10,
      margin : 10 ,
      borderRadius : 10,
      alignSelf : "center",
      justifyContent : "center",
      fontSize : 20,
      color : "#fff"
    },
    item : {
      flexDirection : "row",
      margin : 5,
      justifyContent : 'space-between',
      borderBottomColor : "#333",
      borderBottomWidth : 1,
      padding : 4,
      paddingHorizontal : 20
    }
  })
  